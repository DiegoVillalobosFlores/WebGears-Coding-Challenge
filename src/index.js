import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { MainLayout } from './layouts';
import { StateProvider } from './store';

ReactDOM.render(
	<React.StrictMode>
		<StateProvider>
			<MainLayout />
		</StateProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
