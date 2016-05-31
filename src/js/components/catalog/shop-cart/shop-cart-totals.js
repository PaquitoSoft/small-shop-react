import React from 'react';

export default function ShopCartTotals({shopCart}) {
	return (
		<div className="table-responsive shop-cart-totals">
			<h4>Cart Totals</h4>

			<table className="table cart">
				<tbody>
					<tr className="cart_item">
						<td className="cart-product-name">
							<strong>Cart Subtotal</strong>
						</td>
						<td className="cart-product-name">
							<span className="amount">{shopCart.totalAmount}€</span>
						</td>
					</tr>
					<tr className="cart_item">
						<td className="cart-product-name">
							<strong>Shipping</strong>
						</td>

						<td className="cart-product-name">
							<span className="amount">Free Delivery</span>
						</td>
					</tr>
					<tr className="cart_item">
						<td className="cart-product-name">
							<strong>Total</strong>
						</td>
						<td className="cart-product-name">
							<span className="amount color lead"><strong>{shopCart.totalAmount}€</strong></span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
