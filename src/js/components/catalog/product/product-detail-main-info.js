import React from 'react';

export default function ProductDetailMainInfo({product}) {
	return (
		<div className="product-main-info">
			<span className="product-name">{product.name}</span>
			<div className="price-info">
				<span>Price:</span>
				<span className="price">{product.price}€</span>
			</div>
		</div>
	);
}
