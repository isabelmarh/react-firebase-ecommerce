import React, { useState } from "react";

function ItemCount({ initial, min, max, onAdd }) {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < max) {
            setCount(count + 1);
        }
    }
    const decrement = () => {
        if (count > min) {
            setCount(count - 1);
        }
    }

    return (
        <div style={{ backgroundColor: "white", margin: "14px", textAlign: 'right' }}>
            {/* <h5>Tienes {count} productos en tu carrito</h5> */}

            {count !== min && (
            <button onClick={decrement}>-</button>)}

            {count !== max && (
            <button disabled={count === max} onClick={increment}>+</button>)}
            
            <button onClick={() => {
                if
                (count > 0) onAdd(count)}}>Agregar</button>
            
            <p>max ({max})</p>
            <p>{count === max 
            ? "Usted llegó al máximo de productos"
            : `Quedan ${max - count} en stock`
            }</p>
        </div>
    );
}

export default ItemCount;