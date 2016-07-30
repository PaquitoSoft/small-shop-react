import React from 'react';

import {getText} from '../../../plugins/i18n';

export default function ProductDetailMainInfo({product}) {
	return (
		<div className="product-main-info">
			<span className="product-name">{product.name}</span>
			<div className="price-info">
				<span>{getText('product-page.price')}:</span>
				<span className="price">{product.price}€</span>
			</div>
		</div>
	);
}
