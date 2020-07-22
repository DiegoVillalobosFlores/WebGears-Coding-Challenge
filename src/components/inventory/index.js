import React, { useContext, useState } from 'react';
import { store } from '../../store';
import { PRODUCT_ADD, PRODUCT_DELETE } from '../../store/inventory';

import InventoryItem from './item';

import '../../styles/inventory.css';

const Inventory = () => {
	const { state: globalState, dispatch} = useContext(store);
	const { inventory } = globalState;

	const [item, setItem] = useState({
		title: '',
		price: '',
		imageURL: '',
		description: '',
		currency: 'EUR',
	});

	return (
		<div className='InventoryContainer'>
			<h1 className='InventoryTitle'>Inventory</h1>
			<InventoryItem
				title={item.title}
				price={item.price}
				imageURL={item.imageURL}
				description={item.description}
				buttonLabel='Add Item'
				onChange={(field, value) => setItem({...item, [field]: value})}
				onButtonClick={() => dispatch({ type: PRODUCT_ADD, data: {...item, id: new Date().getTime()} })}
			/>
			{inventory.data.map(({ title, price, imageURL, description, id }) => (
				<InventoryItem
					title={title}
					onButtonClick={() => dispatch({ type: PRODUCT_DELETE, data: id})}
					buttonLabel='Remove Product'
					price={price}
					description={description}
					imageURL={imageURL}
					key={id}
				/>
			))}
		</div>
	);
};

export default Inventory;
