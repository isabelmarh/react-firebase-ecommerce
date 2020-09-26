import React, { useState } from "react";
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from "./firebase";
import { useCartContext } from '../contexts/CartContext';
import { NavLink } from "react-router-dom";


function Checkout() {
  const { cart, quantity, total } = useCartContext();
  const [order, setOrder] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [emailConfirm, setEmailConfirm] = useState();
  const [phone, setPhone] = useState();
  const [submitted, setSubmitted] = useState(false);

  async function createOrder() {
    setSubmitted(true);
    //create buyer and item objects
    const userInfo = {
      nombre: name,
      correo: email,
      celular: phone,
    };

    const newOrder = {
      buyer: userInfo,
      items: cart,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      totalPrice: total,
    };
    console.log(newOrder);

    // push order to Firestore orders collection 
    const db = getFirestore();
    const orders = db.collection("orders");
    try {
      const { id } = await orders.add(newOrder);
      setOrder(id);
    } catch (err) {
      console.log('error submitting order');
    };
  }

  const nameChange = (event) => setName(event.target.value);
  const emailChange = (event) => setEmail(event.target.value);
  const emailConfirmChange = (event) => setEmailConfirm(event.target.value);
  const phoneChange = (event) => setPhone(event.target.value);
  const handleSubmit = (event) => { event.preventDefault(); setSubmitted(true); };

  if (order) {
    return <>
      <div class="form-container">
        <div className='success-message'>
          Muchas gracias por tu compra. El número de tu orden es: {order}
        </div>
      </div>
    </>
  }

  return quantity === 0 ?
    <div class="form-container">
      <div className='error'>Tu carrito está vacío</div>
      <NavLink to="/">
        <button>Volver a productos</button>
      </NavLink>
    </div>

    :
    <>
      <div class="form-container">
        <form className="register-form" onSubmit={handleSubmit}>

          <input id="name" onChange={nameChange} class="form-field" type="text" placeholder="Nombre" name="name" />

          <input id="email" onChange={emailChange} class="form-field" type="text" placeholder="Email" name="email" />

          <input id="email" onChange={emailConfirmChange} class="form-field" type="text" placeholder="Confirma tu correo" name="email" />

          <input id="celular" onChange={phoneChange} class="form-field" type="text" placeholder="Celular (569) 1234-5678" name="celular" />

          <button class="form-field" type="submit" disabled={!name || !phone || !email || (emailConfirm !== email) || submitted} onClick={createOrder}>Comprar
      </button>

        </form>
      </div>
    </>

}

export default Checkout
