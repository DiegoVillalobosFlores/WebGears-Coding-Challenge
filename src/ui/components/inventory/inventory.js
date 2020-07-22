import React, { useContext, useState } from 'react';
import { store } from '../../../store';
import { PRODUCT_ADD, PRODUCT_DELETE, PRODUCT_UPDATE } from '../../../store/inventory';

import InventoryItem from './inventoryItem';

import '../../styles/inventory.css';

const Inventory = () => {
	const { state: globalState, dispatch} = useContext(store);
	const { inventory } = globalState;

	const [item, setItem] = useState({
		title: '',
		price: 0,
		imageURL: '',
		description: '',
		cart: 0,
	});

	return (
		<div className='Container inventory'>
			<h1 className='ContainerTitle'>Inventory</h1>
			<InventoryItem
				product={item}
				buttonLabel='Add Item'
				onChange={(field, value) => setItem({...item, [field]: value})}
				onButtonClick={() => dispatch({ type: PRODUCT_ADD, data: {...item, id: new Date().getTime().toString() } })}
			/>
			{inventory.data.map(product => (
				<InventoryItem
					key={product.id}
					product={product}
					buttonLabel='Remove Product'
					onChange={(field, value) => dispatch({ type: PRODUCT_UPDATE, data: {...product, [field]: value} })}
					onButtonClick={() => dispatch({ type: PRODUCT_DELETE, data: product.id})}
				/>
			))}
		</div>
	);
};

export default Inventory;
