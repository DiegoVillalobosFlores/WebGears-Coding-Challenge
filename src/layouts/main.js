import React from 'react';
import {Inventory, ProductList, ShoppingCart} from '../components';

import '../styles/mainLayout.css';

const MainLayout = () => {
	return (<div className='Container main'>
		<ProductList/>
		<ShoppingCart/>
		<Inventory/>
	</div>);
};

export default MainLayout;
