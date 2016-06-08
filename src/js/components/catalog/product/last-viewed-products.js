import React from 'react';
import events from '../../../plugins/events-bus';
import {getProductUrl, getProductImageUrl} from '../../../plugins/url-builder';

function LastViewedProducts({products}) {

	if (!products.length) return null; // Fast fail

	const _products = products.map((p, index) => {
		const productUrl = getProductUrl(p);
		return (
			<div key={index} className="product clearfix">
				<div className="product-image">
					<a href={productUrl}>
						<img alt={p.id} src={getProductImageUrl(p, 0)}/>
					</a>
				</div>
				<div className="product-desc center">
					<div className="product-title">
						<h3>
							<a href={productUrl}>{p.name}</a>
						</h3>
					</div>
					<div className="product-price">{p.price}€</div>
				</div>
			</div>
		);
	});

	return (
		<div className="col_full nobottommargin">

			<h4>Last visited products</h4>

			<div className="last-viewed-products">
				{_products}
			</div>

		</div>
	);

}

export default LastViewedProducts;
