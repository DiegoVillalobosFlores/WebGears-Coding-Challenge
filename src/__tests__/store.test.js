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

it('update product', () => {
	const TestComponent = () => {
		const { state: globalState, dispatch } = useContext(store);
		const { inventory } = globalState;
		const { data } = inventory;

		const testProduct = {
			id: '0-unique-id',
			title: 'New Title',
			inCart: 3,
		};

		return <div>
			{
				data[0].inCart > 0 ?
					<div>
						<p>ID: {data[0].id}</p>
						<p>Title: {data[0].title}</p>
						<p>InCart: {data[0].inCart}</p>
					</div>
					:
					<p>Waiting</p>
			}
			<button onClick={() => dispatch({ type: PRODUCT_UPDATE, data: testProduct })}>Update Product</button>
		</div>;
	};

	const { getByText } = render(<StateProvider><TestComponent/></StateProvider>);

	expect(getByText('Waiting')).toBeInTheDocument();

	fireEvent.click(getByText('Update Product'));

	expect(getByText('ID:', { exact: false })).toHaveTextContent('0-unique-id');
	expect(getByText('Title:', { exact: false })).toHaveTextContent('New Title');
	expect(getByText('InCart:', { exact: false })).toHaveTextContent('3');
});

it('delete product', () => {
	const TestComponent = () => {
		const { state: globalState, dispatch } = useContext(store);
		const { inventory } = globalState;
		const { data } = inventory;

		return <div>
			{
				data.length === 2 ?
					<div>
						<p>ID: {data[0].id}</p>
						<p>Title: {data[0].title}</p>
					</div>
					:
					<p>Waiting</p>
			}
			<button onClick={() => dispatch({ type: PRODUCT_DELETE, data: '0-unique-id' })}>Delete Product</button>
		</div>;
	};

	const { getByText } = render(<StateProvider><TestComponent/></StateProvider>);

	expect(getByText('Waiting')).toBeInTheDocument();

	fireEvent.click(getByText('Delete Product'));

	expect(getByText('ID:', { exact: false })).toHaveTextContent('1-unique-id');
	expect(getByText('Title:', { exact: false })).toHaveTextContent('Haystack');
});
