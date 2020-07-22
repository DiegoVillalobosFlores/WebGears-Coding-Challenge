export const PRODUCT_ADD = 'PRODUCT_ADD';
export const PRODUCT_DELETE = 'PRODUCT_DELETE';

export const reducer = {
	PRODUCT_ADD: (state, action) => ({
		...state,
		inventory: {
			...state.inventory,
			data: [...state.inventory.data, action.data]
		}
	}),
	PRODUCT_DELETE: (state, action) => {
		const { inventory } = state;
		return ({
			...state,
			inventory: {
				...inventory,
				data: inventory.data.filter(product => product.id !== action.data)
			}
		});
	}
};
