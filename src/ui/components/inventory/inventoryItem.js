import React from 'react';
import { shape, string, number, func } from 'prop-types';

import { Input } from '../inputs';
import { TextArea } from '../text';

import '../../styles/inventory.css';

const InventoryItem = ({ product, buttonLabel, onButtonClick, onChange }) => {
	const { title, price, imageURL, description } = product;

	return (
		<div className='InventoryItemContainer'>
			<Input
				placeholder='Title'
				value={title}
				className='InventoryInput title'
				onChange={e => onChange('title', e.target.value)}
			/>
			<Input
				placeholder='Price'
				value={price.toString()}
				type='number'
				className='InventoryInput price'
				onChange={e => onChange('price', parseInt(e.target.value  > 0 ? e.target.value : 1))}
			/>
			<Input
				placeholder='Image URL'
				value={imageURL}
				className='InventoryInput imageUrl'
				onChange={e => onChange('imageURL', e.target.value)}
			/>
			<TextArea
				placeholder='Description'
				value={description}
				className='InventoryInput description'
				onChange={e => onChange('description', e.target.value)}
			/>
			<Input
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
		price: number.isRequired,
		imageURL: string.isRequired,
		description: string.isRequired,
	}).isRequired,
	buttonLabel: string.isRequired,
	onButtonClick: func.isRequired,
	onChange: func
};

export default InventoryItem;
