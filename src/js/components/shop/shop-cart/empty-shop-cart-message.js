import React from 'react';

export default function EmptyShopCartMessage() {
	return (
		<div className="promo promo-border promo-center bottommargin empty-cart">
			<h3>Your shop cart is empty</h3>
			<a href="/" className="button button-rounded">Return to home</a>
		</div>
	);
}
