import React, { useContext } from 'react';
import { store } from '../../../store';
import { PRODUCT_UPDATE } from '../../../store/inventory';
import CartItem from './cartItem';
import { TitleLabel, TotalLabel } from '../text';

const ShoppingCart = () => {
	const { state: globalState, dispatch } = useContext(store);
	const { inventory } = globalState;

	const cart = inventory.data
		.reduce((acc, p) => {
			if(p.inCart < 1) return  acc;
			return  ({ total: acc.total + p.price * p.inCart, items: [...acc.items, p]});
		},{ total: 0, items: []});

	return (
		<div className='Container cart'>
			<TitleLabel className='ContainerTitle'>Shopping Cart</TitleLabel>
			{cart.items.map(product => (
				<CartItem
					key={product.id}
					product={product}
					onDelete={() => dispatch({ type: PRODUCT_UPDATE, data: {...product, inCart: 0} })}
				/>
			))}
			{
				cart.total > 0 && <TotalLabel total={cart.total} className='CartTotalContainer'/>
			}
		</div>
	);
};

export default ShoppingCart;
