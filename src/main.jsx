import { ThemeProvider } from '@material-tailwind/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider>
			<main className="max-w-4xl mx-auto px-6">
				<App />
			</main>
		</ThemeProvider>
	</React.StrictMode>
);
