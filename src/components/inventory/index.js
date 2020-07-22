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
		<div className='Container inventory'>
			<h1 className='ContainerTitle'>Inventory</h1>
			<InventoryItem
				product={item}
				buttonLabel='Add Item'
				onChange={(field, value) => setItem({...item, [field]: value})}
				onButtonClick={() => dispatch({ type: PRODUCT_ADD, data: {...item, id: new Date().getTime()} })}
			/>
			{inventory.data.map(product => (
				<InventoryItem
					product={product}
					onButtonClick={() => dispatch({ type: PRODUCT_DELETE, data: product.id})}
					buttonLabel='Remove Product'
					key={product.id}
				/>
			))}
		</div>
	);
};

export default Inventory;
