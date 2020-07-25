import React, { useContext } from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render, fireEvent } from '@testing-library/react';

import { StateProvider, store } from '../store';
import { PRODUCT_ADD, PRODUCT_UPDATE, PRODUCT_DELETE } from '../store/inventory';

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

it('add product', () => {
	const TestComponent = () => {
		const { state: globalState, dispatch } = useContext(store);
		const { inventory } = globalState;
		const { data } = inventory;

		const testProduct = {
			id: '4-unique-id',
			title: 'test',
		};

		return <div>
			{
				data.length === 4 ?
					<div>
						<p>ID: {data[3].id}</p>
						<p>Title: {data[3].title}</p>
					</div>
					:
					<p>Waiting</p>
			}
			<button onClick={() => dispatch({ type: PRODUCT_ADD, data: testProduct })}>Add Product</button>
		</div>;
	};

	const { getByText } = render(<StateProvider><TestComponent/></StateProvider>);

	expect(getByText('Waiting')).toBeInTheDocument();

	fireEvent.click(getByText('Add Product'));

	expect(getByText('ID:', { exact: false })).toHaveTextContent('4-unique-id');
	expect(getByText('Title:', { exact: false })).toHaveTextContent('test');
});
