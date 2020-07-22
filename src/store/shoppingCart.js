export const CART_ADD_PRODUCT = 'CART_ADD_PRODUCT';
export const CART_REMOVE_PRODUCT = 'CART_REMOVE_PRODUCT';

export const reducer = {
	CART_ADD_PRODUCT: (state, { data }) => ({
		...state,
		shoppingCart: {
			...state.shoppingCart,
			data: {
				...state.shoppingCart.data,
				[data]: state.shoppingCart.data[data] + 1 || 0
			}
		}
	}),
	CART_REMOVE_PRODUCT: (state, { data }) => {
		const { shoppingCart } = state;
		const newCartData = { ...shoppingCart.data };

		delete newCartData[data];

		return {
			...state,
			shoppingCart: {
				...shoppingCart,
				data: newCartData
			}
		};
	}
};
