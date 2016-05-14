import React from 'react';
import {getProductUrl, getProductImageUrl} from '../../../plugins/url-builder';

export default function ProductsMiniList({title, products: productsList}) {

	if (!productsList || !productsList.length) {
		return null;
	}

	const products = productsList.map((product, index) => {
		const productUrl = getProductUrl(product);
		return (
			<div className="spost clearfix" key={index}>
				<div className="">
					<a href={productUrl}><img className="product-image" src={getProductImageUrl(product, 0)} alt="Image" /></a>
				</div>
				<div className="entry-c">
					<div className="entry-title">
						<h4><a href={productUrl}>{product.name}</a></h4>
					</div>
					<ul className="entry-meta">
						<li className="color">{product.price}€</li>
					</ul>
				</div>
			</div>
		);
	});

	return (
		<div className="widget clearfix product-mini-list">
			<h4>{title}</h4>
			<div id="post-list-footer">
				{products}
			</div>
		</div>
	);
}
