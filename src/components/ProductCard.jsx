import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Typography,
} from '@material-tailwind/react';
import { ShoppingCartIcon } from 'lucide-react';
import React from 'react';

const ProductCard = ({ product, handleAddToCart }) => {
	return (
		<div>
			<Card className="py-4">
				<img
					src={product.image}
					alt="card-image"
					className="w-full object-contain object-center h-[200px]"
				/>
				<CardBody>
					<Typography variant="h5" color="blue-gray" className="mb-2">
						{product.name}
					</Typography>
					<Typography>${product.price.toFixed(2)}</Typography>
				</CardBody>
				<CardFooter className="pt-0">
					<Button
						className="flex items-center gap-2"
						onClick={() => handleAddToCart(product)}
					>
						Add to cart <ShoppingCartIcon size={18} />
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
};

export default ProductCard;
