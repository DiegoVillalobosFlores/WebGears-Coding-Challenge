export const CART_ADD_PRODUCT = 'CART_ADD_PRODUCT';
export const CART_REMOVE_PRODUCT = 'CART_REMOVE_PRODUCT';

export const reducer = {
	CART_ADD_PRODUCT: (state, { data }) => ({
		...state,
		cart: {
			...state.cart,
			data: {
				[data.id]: state.cart.data[data.id] + 1 || 0
			}
		}
	}),
	CART_REMOVE_PRODUCT: (state, { data }) => {
		const { cart } = state;
		const newCartData = { ...cart.data };

		delete newCartData[data.id];

		return {
			...state,
			cart: {
				...cart,
				data: newCartData
			}
		};
	}
};
