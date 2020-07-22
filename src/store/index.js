import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import InventoryContext from './inventory';
import InitialState from './initialState';

const store = createContext(InitialState);
const { Provider } = store;

const globalReducer = {
	...InventoryContext.reducer,
};

const StateProvider = ({ children }) => {
	const [state, dispatch] = useReducer((state, action) => {
		if(!globalReducer[action.type]) return state;

		return globalReducer[action.type](state, action);
	}, InitialState);

	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

StateProvider.propTypes = {
	children: PropTypes.any
};

export { store, StateProvider };
