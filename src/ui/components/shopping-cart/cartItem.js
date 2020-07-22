import React from 'react';
import { shape, string, number, func } from 'prop-types';

const CartItem = ({ product, onDelete }) => {
	const { title, price, cart } = product;

	return (
		<div>
			<p>{title}</p>
			<p>{price}</p>
			<p>Quantity:</p>
			<p>{cart}</p>
			<input type='button' value='X' onClick={onDelete}/>
		</div>
	);
};

CartItem.propTypes = {
	product: shape({
		title: string.isRequired,
		price: number.isRequired,
		cart: number.isRequired,
	}).isRequired,
	onDelete: func.isRequired,
};

export default CartItem;
