import React, { useContext } from 'react';

import { store } from '../../../store';
import { PRODUCT_UPDATE } from '../../../store/inventory';

import Listing from './listing';

import '../../styles/mainLayout.css';
import { TitleLabel } from '../text';

const ProductList = () => {
	const { state: globalState, dispatch } = useContext(store);
	const { inventory } = globalState;

	return (
		<div className='Container list'>
			<TitleLabel className='ContainerTitle'>List of Products</TitleLabel>
			{inventory.data.map(product => (
				<Listing
					key={product.id}
					product={product}
					onAdd={() => dispatch({ type: PRODUCT_UPDATE, data: {...product, inCart: product.inCart + 1} })}
				/>
			))}
		</div>
	);
};

export default ProductList;