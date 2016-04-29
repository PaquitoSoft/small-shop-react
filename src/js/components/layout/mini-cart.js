import React from 'react';

export default function MiniCart(props) {
	return (
		<div id="top-cart">
			<a href="#" id="top-cart-trigger"><i className="icon-shopping-cart"></i><span>5</span></a>
			<div className="top-cart-content">
				<div className="top-cart-title">
					<h4>Shopping Cart</h4>
				</div>
				<div className="top-cart-items">
					<div className="top-cart-item clearfix">
						<div className="top-cart-item-image">
							<a href="#"><img src="/images/shop/small/1.jpg" alt="Blue Round-Neck Tshirt" /></a>
						</div>
						<div className="top-cart-item-desc">
							<a href="#">Blue Round-Neck Tshirt</a>
							<span className="top-cart-item-price">$19.99</span>
							<span className="top-cart-item-quantity">x 2</span>
						</div>
					</div>
					<div className="top-cart-item clearfix">
						<div className="top-cart-item-image">
							<a href="#"><img src="/images/shop/small/6.jpg" alt="Light Blue Denim Dress" /></a>
						</div>
						<div className="top-cart-item-desc">
							<a href="#">Light Blue Denim Dress</a>
							<span className="top-cart-item-price">$24.99</span>
							<span className="top-cart-item-quantity">x 3</span>
						</div>
					</div>
				</div>
				<div className="top-cart-action clearfix">
					<span className="fleft top-checkout-price">$114.95</span>
					<button className="button button-3d button-small nomargin fright">View Cart</button>
				</div>
			</div>
		</div>
	);
}
