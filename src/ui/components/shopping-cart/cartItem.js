import React from 'react';
import { shape, string, number, func } from 'prop-types';

import '../../styles/shoppingCart.css';
import { Input } from '../inputs';
import { Label } from '../text';

const CartItemSeparator = () => <div className='CartItemSeparator'/>;

const CartItem = ({ product, onDelete }) => {
	const { title, price, inCart } = product;

	const handleClick = () => {
		onDelete(product);
	};

	return (
		<div className='CartItemContainer'>
			<Label className='CartItemLabel title'>{title}</Label>
			<Label className='CartItemLabel price'>{price}$</Label>
			<Label className='CartItemLabel quantityLabel'>Quantity:</Label>
			<Label className='CartItemLabel quantity'>{inCart}</Label>
			<Input className='CartItemButton' type='button' value='X' onClick={handleClick}/>
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
