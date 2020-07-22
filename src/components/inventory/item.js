import React from 'react';
import { shape, string, func } from 'prop-types';

import ItemInput from './itemInput';

import '../../styles/inventory.css';

const InventoryItem = ({ product, buttonLabel, onButtonClick, onChange }) => {
	const { title, price, imageURL, description } = product;

	return (
		<div className='InventoryItemContainer'>
			<ItemInput
				placeholder='Title'
				value={title}
				className='InventoryInput title'
				onChange={e => onChange('title', e.target.value)}
			/>
			<ItemInput
				placeholder='Price'
				value={price}
				type='number'
				className='InventoryInput price'
				onChange={e => onChange('price', e.target.value)}
			/>
			<ItemInput
				placeholder='Image URL'
				value={imageURL}
				className='InventoryInput imageUrl'
				onChange={e => onChange('imageURL', e.target.value)}
			/>
			<ItemInput
				placeholder='Description'
				value={description}
				className='InventoryInput description'
				onChange={e => onChange('description', e.target.value)}
			/>
			<ItemInput
				type='button'
				value={buttonLabel}
				onClick={onButtonClick}
				className='InventoryInput button'
			/>
		</div>
	);
};

InventoryItem.defaultProps = {
	onChange: () => {},
};

InventoryItem.propTypes = {
	product: shape({
		title: string.isRequired,
		price: string.isRequired,
		imageURL: string.isRequired,
		description: string.isRequired,
	}).isRequired,
	buttonLabel: string.isRequired,
	onButtonClick: func.isRequired,
	onChange: func
};

export default InventoryItem;
