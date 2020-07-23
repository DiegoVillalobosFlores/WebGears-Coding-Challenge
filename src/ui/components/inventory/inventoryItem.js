import React from 'react';
import { shape, string, number, func } from 'prop-types';

import { Input } from '../inputs';
import { TextArea } from '../text';

import '../../styles/inventory.css';

const defaultFunc = () => {};

const InventoryItem = ({ product, buttonLabel, onClick, onChange }) => {
	const { title, price, imageURL, description } = product;

	const handleChange = (field, value) => {
		if(field === 'price') return onChange(product, field, parseInt(value  > 0 ? value : 1));
		onChange(product, field, value);
	};

	const handleClick = () => {
		onClick(product);
	};

	return (
		<div className='InventoryItemContainer'>
			<Input
				placeholder='Title'
				value={title}
				field={'title'}
				className='InventoryInput title'
				onChange={handleChange}
			/>
			<Input
				placeholder='Price'
				value={price.toString()}
				type='number'
				field={'price'}
				className='InventoryInput price'
				onChange={handleChange}
			/>
			<Input
				placeholder='Image URL'
				value={imageURL}
				field={'imageURL'}
				className='InventoryInput imageUrl'
				onChange={handleChange}
			/>
			<TextArea
				placeholder='Description'
				value={description}
				field={'description'}
				className='InventoryInput description'
				onChange={handleChange}
			/>
			<Input
				type='button'
				value={buttonLabel}
				onClick={handleClick}
				className='InventoryInput button'
			/>
		</div>
	);
};

InventoryItem.defaultProps = {
	onChange: defaultFunc,
	onClick: defaultFunc,
};

InventoryItem.propTypes = {
	product: shape({
		title: string.isRequired,
		price: number.isRequired,
		imageURL: string.isRequired,
		description: string.isRequired,
	}).isRequired,
	buttonLabel: string.isRequired,
	onClick: func,
	onChange: func
};

export default InventoryItem;
