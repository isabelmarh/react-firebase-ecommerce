import React from 'react';
import { Link } from 'react-router-dom';

function ItemDetail({ product }) {
    const { title, price, categoryId, description, imageId, id } = product;

    return (
            <div className="product">
            <img src={`/images/${imageId}`} alt={`${title} telas`} />
            <h1 className="title">{title}</h1>
            <h1 className="category">Categoria: {categoryId}</h1>
            <h1 className="description">Descripcion: {description}</h1>
            <p className="price">Precio: ${price}</p>
            <Link to={`/item/${id}`}> 
            <button>Ir a detalle</button>
            </Link>
            </div>
    );
}

export default ItemDetail;



