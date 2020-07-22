import React from 'react';
import { string, func } from 'prop-types';

import ItemInput from './itemInput';

import '../../styles/inventory.css';

const InventoryItem = ({ title, price, imageURL, description, buttonLabel, onButtonClick }) => {
	return (
		<div className='InventoryItemContainer'>
			<ItemInput placeholder='Title' value={title} className='InventoryInput title'/>
			<ItemInput placeholder='Price' value={price} className='InventoryInput price'/>
			<ItemInput placeholder='Image URL' value={imageURL} className='InventoryInput imageUrl'/>
			<ItemInput placeholder='Description' value={description} className='InventoryInput description'/>
			<ItemInput type='button' value={buttonLabel} onClick={onButtonClick} className='InventoryInput button'/>
		</div>
	);
};

InventoryItem.propTypes = {
	title: string.isRequired,
	price: string.isRequired,
	imageURL: string.isRequired,
	description: string.isRequired,
	buttonLabel: string.isRequired,
	onButtonClick: func.isRequired
};

export default InventoryItem;
