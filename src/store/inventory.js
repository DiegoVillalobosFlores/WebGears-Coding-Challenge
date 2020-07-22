const PRODUCT_ADD = 'PRODUCT_ADD';
const PRODUCT_DELETE = 'PRODUCT_DELETE';

export default {
	reducer: {
		PRODUCT_ADD: (inventory, action) => inventory.data.push(action.data),
		PRODUCT_DELETE: (inventory, action) => inventory.data.filter(product => product.id !== action.data)
	},
	actions: {
		PRODUCT_ADD,
		PRODUCT_DELETE
	}
};
