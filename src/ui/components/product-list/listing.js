import React from 'react';
import { shape, string, number, func } from 'prop-types';

import '../../styles/productList.css';
import { Input } from '../inputs';
import { Label } from '../text';

const Listing = ({ product, onAdd }) => {
	const { title, imageURL, price, description } = product;

	const handleClick = () => {
		onAdd(product);
	};

	return (
		<div className='ProductListingContainer'>
			<img src={imageURL} alt='product' className='ProductImage'/>
			<Label className='ProductLabel title' >{title}</Label>
			<Label className='ProductLabel price' >{price}$</Label>
			<Label className='ProductLabel description' >{description}</Label>
			<Input className='ProductButton' type='button' value='Add to Order' onClick={handleClick}/>
		</div>
	);
};

Listing.propTypes = {
	product: shape({
		title: string.isRequired,
		price: number.isRequired,
		imageURL: string.isRequired,
		description: string.isRequired,
	}).isRequired,
	onAdd: func.isRequired,
};

export default Listing;
