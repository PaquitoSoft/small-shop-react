import React from 'react';

import * as urlBuilder from '../../../plugins/url-builder';

export default function ShopCartSummary({orderItems}) {
	const _orderItems = orderItems.map((orderItem, index) => {
		const productUrl = urlBuilder.getProductUrl(orderItem.detail),
			orderItemTotal = orderItem.quantity * orderItem.detail.price;

		return (
			<tr className="cart_item" key={index}>
				<td className="cart-product-thumbnail">
					<a href={productUrl}>
						<img width="64" src={urlBuilder.getProductImageUrl(orderItem.detail, 0)} alt={orderItem.detail.name}/>
					</a>
				</td>
				<td className="cart-product-name">
					<a href={productUrl}>Pink Printed Dress</a>
				</td>
				<td className="cart-product-quantity">
					<div className="quantity clearfix">
						x{orderItem.quantity}
					</div>
				</td>
				<td className="cart-product-subtotal">
					<span className="amount">{orderItemTotal.toFixed(2)}€</span>
				</td>
			</tr>
		);
	});

	return (
		<div className="table-responsive clearfix">
			<h4>Your Order</h4>

			<table className="table cart">
				<thead>
					<tr>
						<th className="cart-product-thumbnail">&nbsp;</th>
						<th className="cart-product-name">Product</th>
						<th className="cart-product-quantity">Quantity</th>
						<th className="cart-product-subtotal">Total</th>
					</tr>
				</thead>
				<tbody>
					{_orderItems}
				</tbody>

			</table>

		</div>
	);
}
