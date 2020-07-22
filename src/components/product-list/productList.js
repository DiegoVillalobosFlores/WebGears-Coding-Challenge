import React, { useContext } from 'react';
import { store } from '../../store';
import Listing from './listing';

import '../../styles/mainLayout.css';

const ProductList = () => {
	const { state: globalState} = useContext(store);
	const { inventory } = globalState;

	return (
		<div className='Container list'>
			<h1 className='ContainerTitle'>List of Products</h1>
			{inventory.data.map(i => (
				<Listing onClick={() => {}} product={i} key={i.id}/>
			))}
		</div>
	);
};

export default ProductList;