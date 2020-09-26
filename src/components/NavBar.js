import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCartContext } from "../contexts/CartContext";
import CartIcon from './CartIcon'

const NavBar = () => {
	const { quantity } = useCartContext();

	return (
		<div className="navbar">
			<NavLink to="/">Home</NavLink>
			<NavLink to="/">Productos</NavLink>
			<NavLink to="/categories/estampadas">Estampadas</NavLink>
			<NavLink to="/categories/lisas">Lisas</NavLink>
			<NavLink to="/cart">
			<CartIcon /> 
			{quantity > 0 && ( <span>{quantity}</span> )}
			</NavLink>
		</div>
	);
}

export default NavBar;
