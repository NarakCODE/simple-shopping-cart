import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

const products = [
	{
		id: 1,
		name: 'MacBook Pro 16" 2023 M3 Max',
		price: 4039,
		image:
			'https://soklyphone.com/storage/Apple/Macbook/MacBook-Pro-M3/16/Silver/silver-2-1702356666gUqec.png',
	},
	{
		id: 2,
		name: 'Galaxy Z Fold 5',
		price: 1699,
		image:
			'https://soklyphone.com/storage/SAMSUNG/Phone/Galaxy-Z-Fold5/blue-1690428085YTXRG.jpg',
	},
	{
		id: 3,
		name: 'Galaxy S23 Ultra',
		price: 919,
		image:
			'https://soklyphone.com/storage/SAMSUNG/Phone/Galaxy-S23-Ultra/green-1675310669ZQkSt.jpg',
	},
	{
		id: 4,
		name: 'Google Pixel 7 Pro',
		price: 738,
		image:
			'https://soklyphone.com/storage/Google/pixel-7-pro/pixel-7-pro-hazel-1665723695LBsaz.jpg',
	},
];

const App = () => {
	const [cart, setCart] = useState([]);

	const handleAddToCart = (product) => {
		const newCart = [...cart, { ...product }];
		setCart(newCart);
	};

	const handleRemoveCart = (itemToRemove) => {
		const newCart = cart.filter((item) => item.id !== itemToRemove.id);
		setCart(newCart);
	};

	return (
		<div>
			<ShoppingCart cart={cart} handleRemoveCart={handleRemoveCart} />
			<ProductList products={products} handleAddToCart={handleAddToCart} />
		</div>
	);
};

export default App;
