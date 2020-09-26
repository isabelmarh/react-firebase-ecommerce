import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { useCartContext } from "../contexts/CartContext";

function Carrito() {
    const { cart, clearCart, quantity, total } = useCartContext();
    const [order, setOrder] = useState();

    return (
        <>
            <div className="carrito">
                {cart.map((x) => (

                    <div className="form">
                        <div/>
                        <p>Producto: {x.item.title}</p>
                        <p>Precio unidad: ${x.item.price}</p>
                        <p>Cantidad: {x.quantity}</p>
                    </div>

                ))}
                <div className="form">
                    <p>Total ({quantity} unidades): ${total} pesos</p>
                </div>
            </div>


            {order ? (
                <CheckoutForm />
            ) : (
                    <div className="carrito">
                        <button onClick={() => clearCart()}>Vaciar</button>
                        <button onClick={() => setOrder(true)}>Ir a checkout</button>
                        <NavLink to="/">
                            <button>Volver a productos</button>
                        </NavLink>
                    </div>
                )}


        </>
    )
}

export default Carrito;

