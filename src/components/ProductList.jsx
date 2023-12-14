import React from 'react';

import ProductCard from './ProductCard';

const ProductList = ({ products, handleAddToCart }) => {
	return (
		<div>
			<h2 className="py-10 text-4xl text-center">All Products</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						handleAddToCart={handleAddToCart}
					/>
				))}
			</div>
		</div>
	);
};

export default ProductList;
