export const PRODUCT_ADD = 'PRODUCT_ADD';
export const PRODUCT_DELETE = 'PRODUCT_DELETE';
export const PRODUCT_UPDATE = 'PRODUCT_UPDATE';

const addProduct = (state, action) => ({
	...state,
	inventory: {
		...state.inventory,
		data: [...state.inventory.data, action.data]
	}
});

const deleteProduct = (state, action) => ({
	...state,
	inventory: {
		...state.inventory,
		data: state.inventory.data.filter(product => product.id !== action.data)
	}
});

const updateProduct = (state, action) => {
	const { inventory } = state;

	const itemIndex = inventory.data.findIndex(({ id }) => id === action.data.id);
	if(itemIndex === -1) return state;

	const newData = inventory.data;
	newData[itemIndex] = action.data;

	return ({
		...state,
		inventory: {
			...inventory,
			data: newData
		}
	});
};

export const reducer = {
	PRODUCT_ADD: addProduct,
	PRODUCT_DELETE: deleteProduct,
	PRODUCT_UPDATE: updateProduct,
};
