import React from 'react';

import {getProductUrl} from '../../../plugins/url-builder';

export default function ProductNavigationLinks({currentProduct, category, categoryProducts = []}) {
	const productIndex = categoryProducts.findIndex(product => product.id === currentProduct.id);
	if (!category || productIndex < 0) {
		return null;
	}

	let previousProductUrl,
		nextProductUrl;

	if (productIndex > 0) {
		previousProductUrl = getProductUrl(categoryProducts[productIndex - 1], category);
	}
	if (productIndex < categoryProducts.length - 1) {
		nextProductUrl = getProductUrl(categoryProducts[productIndex + 1], category);
	}

	return (
		<div className="product-navigation-links">
			<a
				href={previousProductUrl ? previousProductUrl : '#'}
				className={`prev ${!previousProductUrl ? 'disabled' : ''}`}>
				Previous
			</a>
			<span className="separator">|</span>
			<a
				href={nextProductUrl ? nextProductUrl : '#'}
				className={`next ${!nextProductUrl ? 'disabled' : ''}`}>
				Next
			</a>
		</div>
	);
}
