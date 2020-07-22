export const PRODUCT_ADD = 'PRODUCT_ADD';
export const PRODUCT_DELETE = 'PRODUCT_DELETE';
export const PRODUCT_UPDATE = 'PRODUCT_UPDATE';

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
	},
	PRODUCT_UPDATE: (state, action) => {
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
	}
};
