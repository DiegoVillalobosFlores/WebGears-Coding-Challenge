import React from 'react';
import ReactDOM from 'react-dom';
import './ui/styles/index.css';
import { MainLayout } from './ui/layouts';
import { StateProvider } from './store';

ReactDOM.render(
	<React.StrictMode>
		<StateProvider>
			<MainLayout />
		</StateProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
