import React from 'react';
import { ProductList } from '../components/product-list';
import { Inventory } from '../components/inventory';
import { ShoppingCart } from '../components/shopping-cart';

import '../styles/mainLayout.css';

const MainLayout = () => {
	return(
		<div className='Container main'>
			<ProductList/>
			<ShoppingCart/>
			<Inventory/>
		</div>
	);
};

export default MainLayout;
