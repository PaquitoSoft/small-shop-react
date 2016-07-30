import React from 'react';

import {getText} from '../../../plugins/i18n';

export default function ShopCartTotals({shopCart, title}) {
	const totalAmount = shopCart.orderItems.reduce((total, orderItem) => {
		total += (orderItem.detail.price * orderItem.quantity);
		return total;
	}, 0).toFixed(2);

	return (
		<div className="table-responsive shop-cart-totals">
			<h4>{title || getText('shared.subtotals.cart-totals')}</h4>

			<table className="table cart">
				<tbody>
					<tr className="cart_item">
						<td className="cart-product-name">
							<strong>{getText('shared.subtotals.cart-subtotal')}</strong>
						</td>
						<td className="cart-product-name">
							<span className="amount">{totalAmount}€</span>
						</td>
					</tr>
					<tr className="cart_item">
						<td className="cart-product-name">
							<strong>{getText('shared.subtotals.shipping')}</strong>
						</td>

						<td className="cart-product-name">
							<span className="amount">{getText('shared.subtotals.free-shipping')}</span>
						</td>
					</tr>
					<tr className="cart_item">
						<td className="cart-product-name">
							<strong>{getText('shared.total')}</strong>
						</td>
						<td className="cart-product-name">
							<span className="amount color lead"><strong>{totalAmount}€</strong></span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
