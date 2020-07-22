import React from 'react';
import { shape, string, func } from 'prop-types';

import '../../styles/productList.css';

const Listing = ({ product, onClick }) => {
	const { title, imageURL, price, description } = product;
	return (
		<div className='ProductListingContainer'>
			<img src={imageURL} alt='product-image' className='ProductImage'/>
			<p className='ProductLabel title' >{title}</p>
			<p className='ProductLabel price' >{price}$</p>
			<p className='ProductLabel description' >{description}</p>
			<input className='ProductButton' type='button' value='Add to Order' onClick={onClick}/>
		</div>
	);
};

Listing.propTypes = {
	product: shape({
		title: string.isRequired,
		price: string.isRequired,
		imageURL: string.isRequired,
		description: string.isRequired,
		buttonLabel: string.isRequired,
	}).isRequired,
	onClick: func.isRequired,
};

export default Listing;
