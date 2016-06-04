import React from 'react';
import appConfig from '../../../config/app-config';
import * as urlBuilder from '../../../plugins/url-builder';

export default function ProductSummary({ product, category }) {
	let productUrl = urlBuilder.getProductUrl(product, category),
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
				<a href={productUrl}><img src={urlBuilder.getProductImageUrl(product, 0)} alt={product.name}/></a>
				<a href={productUrl}><img src={urlBuilder.getProductImageUrl(product, 1)} alt={product.name}/></a>
				{label}
			</div>
			<div className="product-desc">
				<div className="product-title"><h3><a href={productUrl}>{product.name}</a></h3></div>
				{price}
			</div>
		</div>
	);
}

export default ProductSummary;
