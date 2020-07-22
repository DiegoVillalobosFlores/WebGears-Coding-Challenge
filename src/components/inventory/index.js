import React, { useContext } from 'react';
import { store } from '../../store';
import InventoryItem from './item';


const Inventory = () => {
	const { state: globalState} = useContext(store);
	const { inventory } = globalState;

	return (
		<div>
			{inventory.data.map(({ title, price, imageURL, description, id }) => (
				<InventoryItem
					title={title}
					onButtonClick={() => {}}
					buttonLabel='Remove Product'
					price={price}
					description={description}
					imageURL={imageURL}
					key={id}
				/>
			))}
		</div>
	);
};

export default Inventory;
