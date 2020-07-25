import React, { useContext, useState } from 'react';
import { store } from '../../../store';
import { PRODUCT_ADD, PRODUCT_DELETE, PRODUCT_UPDATE } from '../../../store/inventory';

import InventoryItem from './inventoryItem';

import '../../styles/inventory.css';
import { TitleLabel } from '../text';

const initialItem = {
	title: '',
	price: 1,
	imageURL: '',
	description: '',
	inCart: 0,
};

const Inventory = () => {
	const { state: globalState, dispatch} = useContext(store);
	const { inventory } = globalState;

	const [item, setItem] = useState(initialItem);

	const onProductAdd = () => {
		dispatch({ type: PRODUCT_ADD, data: {...item, id: new Date().getTime().toString() } });
		setItem(initialItem);
	};

	const onProductDelete = ({ id }) => {
		dispatch({ type: PRODUCT_DELETE, data: id});
	};

	const onProductUpdate = (product, field, value) => {
		dispatch({ type: PRODUCT_UPDATE, data: {...product, [field]: value} });
	};

	const onNewProductEdit = (product, field, value) => {
		setItem({...product, [field]: value});
	};

	return (
		<div className='Container inventory'>
			<TitleLabel className='ContainerTitle'>Inventory</TitleLabel>
			<InventoryItem
				product={item}
				buttonLabel='Add Item'
				onChange={onNewProductEdit}
				onClick={onProductAdd}
			/>
			{inventory.data.map(product => (
				<InventoryItem
					key={product.id}
					product={product}
					buttonLabel='Remove Product'
					onChange={onProductUpdate}
					onClick={onProductDelete}
				/>
			))}
		</div>
	);
};

export default Inventory;
