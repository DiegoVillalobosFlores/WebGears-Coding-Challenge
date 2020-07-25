import React, { useContext } from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';

import { StateProvider, store } from '../store';

it('inventory context', () => {
	const TestComponent = () => {
		const { state: globalState } = useContext(store);
		const { inventory } = globalState;
		const { data } = inventory;

		return <div>
			<div>Length: {data.length}</div>
			<div>First ID: {data[0].id}</div>
			<div>Second ID: {data[1].id}</div>
			<div>Third ID: {data[2].id}</div>
		</div>;
	};
	const rendered = render(
		<StateProvider>
			<TestComponent/>
		</StateProvider>
	);
	// console.log(rendered.getByText('Length: ', { exact: false }));
	expect(rendered.getByText('Length: ', { exact: false })).toHaveTextContent('3');
	expect(rendered.getByText('First ID: ', { exact: false })).toHaveTextContent('0-unique-id');
	expect(rendered.getByText('Second ID: ', { exact: false })).toHaveTextContent('1-unique-id');
	expect(rendered.getByText('Third ID: ', { exact: false })).toHaveTextContent('2-unique-id');
});
