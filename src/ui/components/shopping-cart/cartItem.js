import React from 'react';
import { shape, string, number, func } from 'prop-types';

import '../../styles/shoppingCart.css';
import { Input } from '../inputs';

const CartItemSeparator = () => <div className='CartItemSeparator'/>;

const CartItem = ({ product, onDelete }) => {
	const { title, price, inCart } = product;

	return (
		<div className='CartItemContainer'>
			<p className='CartItemLabel title'>{title}</p>
			<p className='CartItemLabel price'>{price}$</p>
			<p className='CartItemLabel quantityLabel'>Quantity:</p>
			<p className='CartItemLabel quantity'>{inCart}</p>
			<Input className='CartItemButton' type='button' value='X' onClick={onDelete}/>
			<CartItemSeparator/>
		</div>
	);
};

CartItem.propTypes = {
	product: shape({
		title: string.isRequired,
		price: number.isRequired,
		inCart: number.isRequired,
	}).isRequired,
	onDelete: func.isRequired,
};

export default CartItem;
