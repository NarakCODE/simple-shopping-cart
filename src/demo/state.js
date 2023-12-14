import React, { useState } from 'react';
import Navbar from './components/Navbar';

const App = () => {
	const [toggle, setToggle] = useState(false);

	const [count, setCount] = useState(0);

	const [userName, setUserName] = useState('Devid Alaba');

	const [input, setInput] = useState('');

	const handleToggle = () => {
		setToggle(!toggle);
		setCount(10);
		setUserName('Vervalde');
	};

	return (
		<div>
			<Navbar />
			<button onClick={() => setToggle(true)}>Open menu</button>
			<button onClick={() => setToggle(false)}>Close menu</button>
			<button onClick={handleToggle}>Toggle menu</button>

			{toggle && (
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Coulntact</li>
				</ul>
			)}

			<div>
				<button onClick={() => setCount(count - 1)}>-</button>
				<span>{count}</span>
				<button onClick={() => setCount(count + 1)}>+</button>
			</div>

			<div>
				{userName}
				<button onClick={() => setUserName('Vinicius Jr')}>change name</button>
			</div>

			<h2 className="text-blue-500 font-bold text-2xl">Hello world</h2>
			<div>
				<h2 className="text-red-500">{input}</h2>
				<input
					type="text"
					placeholder="Search"
					onChange={(e) => setInput(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default App;
