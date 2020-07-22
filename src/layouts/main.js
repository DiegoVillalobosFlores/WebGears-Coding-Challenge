import React from 'react';
import {Inventory, ProductList, ShoppingCart} from '../components';

import '../styles/mainLayout.css';

const MainLayout = props => {
	return (<div className='MainContainer'>
		<ProductList/>
		<ShoppingCart/>
		<Inventory/>
	</div>);
};

export default MainLayout;
