import { Button, Drawer } from '@material-tailwind/react';
import { ShoppingBag, Trash, X } from 'lucide-react';
import React, { useState } from 'react';

const ShoppingCart = ({ cart, handleRemoveCart }) => {
	const [open, setOpen] = useState(false);
	const openDrawer = () => setOpen(true);
	const closeDrawer = () => setOpen(false);
	return (
		<div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
			<h2 className="text-2xl font-bold">Logo</h2>
			<Button onClick={openDrawer} variant="text" className="relative">
				<ShoppingBag size={28} />
				<span className="absolute right-2 top-1 rounded-full w-5 h-5 bg-blue-500 text-white flex items-center justify-center text-md">
					{cart.length}
				</span>
			</Button>
			<Drawer open={open} onClose={closeDrawer} className="p-4">
				<div className="flex items-center justify-between">
					<h2 className="font-bold text-xl">Your cart</h2>
					<button onClick={closeDrawer}>
						<X />
					</button>
				</div>

				<div className="grid grid-cols-1 gap-y-4 mt-10 divide-y-2">
					{cart.length === 0 ? (
						<p className="text-center">No products</p>
					) : (
						<>
							{cart.map((item) => (
								<div
									key={item.id}
									className="flex items-center justify-between py-2"
								>
									<div className="flex items-start gap-2">
										<img
											src={item.image}
											alt=""
											className="w-20 bg-black object-contain object-center"
										/>
										<div className="flex flex-col gap-2">
											<h2 className="text-sm font-bold">{item.name}</h2>
											<p className="text-sm">${item.price.toFixed(2)}</p>
										</div>
									</div>
									<button onClick={() => handleRemoveCart(item)}>
										<Trash size={18} />
									</button>
								</div>
							))}
						</>
					)}
				</div>
			</Drawer>
		</div>
	);
};

export default ShoppingCart;
