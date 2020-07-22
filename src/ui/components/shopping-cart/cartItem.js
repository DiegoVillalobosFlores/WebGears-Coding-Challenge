import React from 'react';
import { shape, string, number, func } from 'prop-types';

import '../../styles/shoppingCart.css';

const CartItem = ({ product, onDelete }) => {
	const { title, price, cart } = product;

	return (
		<div className='CartItemContainer'>
			<p className='CartItemLabel title'>{title}</p>
			<p className='CartItemLabel price'>{price}</p>
			<p className='CartItemLabel quantityLabel'>Quantity:</p>
			<p className='CartItemLabel quantity'>{cart}</p>
			<input className='CartItemButton' type='button' value='X' onClick={onDelete}/>
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
