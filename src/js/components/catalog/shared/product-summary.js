import React from 'react';
import { getProductUrl, getProductImageUrl } from '../../../plugins/url-builder';

import LazyLoadedImage from './lazy-loaded-image';

export default function ProductSummary({product, category, viewportInfo, visibleProducts}) {
	let productUrl = getProductUrl(product, category),
		label,
		price;

	if (product.oldPrice) {
		price = (<div className="product-price"><del>{product.oldPrice}€</del> <ins>{product.price}€</ins></div>);
	} else {
		price = (<div className="product-price">{product.price}€</div>);
	}

	if (product.label) {
		label = (<div className="sale-flash">{product.label}</div>); // "50% Off"
	}

	return (
		<div className="product clearfix">
			<div className="product-image">
				<a href={productUrl}>
					<LazyLoadedImage
						imageUrl={getProductImageUrl(product, 0)}
						imageAlt={product.name}
					/>
				</a>
				<a href={productUrl}>
					<LazyLoadedImage
						imageUrl={getProductImageUrl(product, 1)}
						imageAlt={product.name}
					/>
				</a>
				{label}
			</div>
			<div className="product-desc">
				<div className="product-title">
					<h3><a href={productUrl}>{product.name}</a></h3>
				</div>
				{price}
			</div>
		</div>
	);
}
