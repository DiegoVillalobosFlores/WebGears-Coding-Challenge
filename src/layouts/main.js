import React from 'react';
import {Inventory, ProductList, ShoppingCart} from '../components';

const MainLayout = props => {
	return (<div>
		<ProductList/>
		<ShoppingCart/>
		<Inventory/>
	</div>);
};

export default MainLayout;
