import React, { useContext, useState, useEffect } from 'react';
import { store } from '../../../store';

import { CART_REMOVE_PRODUCT } from '../../../store/shoppingCart';

const ShoppingCart = () => {
	const { state: globalState, dispatch } = useContext(store);
	const { inventory, shoppingCart: cart } = globalState;

	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		const shoppingItems = Object.keys(cart.data);
		for(const key of shoppingItems){
			if(inventory.data.findIndex(({ id }) => id === key) === -1){
				dispatch({ type: CART_REMOVE_PRODUCT, data: key });
			}
		}
	}, [inventory, cart]);

	useEffect(()=> {
		const inventoryData = inventory.data;

		const items = Object.entries(cart.data)
			.filter(([id]) => inventoryData.findIndex(p => p.id === id) !== -1)
			.map(
				([id, amount]) => ({ ...inventoryData.find(p => p.id === id), amount }));

		setCartItems(items);
	}, [inventory, cart]);

	return (
		<div className='Container cart'>
			<h1 className='ContainerTitle'>Shopping Cart</h1>
			{cartItems.map(item => (
				<div key={item.id}>
					{item.title}
					{item.amount}
				</div>
			))}
		</div>
	);
};

export default ShoppingCart;
