import React from 'react';
import { useCartContext } from '../contexts/CartContext'
import ItemCount from './ItemCount';

function Item({ item }) {
    const { title, price, categoryId, description, stock, imageId } = item;
    const { cart, addToCart } = useCartContext();
    const inCart = cart.find((cartItem) => item.id === cartItem.item.id)

    return (
        <div className="container">
            <div className="product">
                <img src={`/images/${imageId}`} alt={`${title} telas`} />
                <h1 className="title">{title}</h1>
                <h1 className="category">Categoria: {categoryId}</h1>
                <h1 className="description">Descripcion: {description}</h1>
                <p className="price">Precio: ${price}</p>
                <ItemCount
                    initial={inCart ? inCart.quantity : 0}
                    min={0}
                    max={stock}
                    onAdd={(count) => addToCart({ item, quantity: count })}
                />
            </div >
        </div>
    );
}

export default Item;