import React from 'react';
import Logger from '../../plugins/logger';
import events from '../../plugins/events-bus';
import * as shopCartApi from '../../api/shop';

const logger = new Logger('ShopCart');

class MiniCart extends React.Component {

	constructor() {
		super();

		this.state = {
			shopCart: {
				orderItems: []
			}
		};
		this.handleProductAddedToCart = this.onProductAddedToCart.bind(this);
	}

	componentDidMount() {
		events.bus.on(events.types.PRODUCT_ADDED_TO_CART, this.handleProductAddedToCart);

		shopCartApi.getShopCart()
			.then(shopCart => {
				console.log('Setting new Shop Cart:', shopCart);
				this.setState({shopCart});
			})
			.catch(err => {
				logger.error('Could not load shop cart:', err);
			});
	}

	componentWillUnmount() {
		events.bus.removeListener(events.types.PRODUCT_ADDED_TO_CART, this.handleProductAddedToCart);
	}

	onProductAddedToCart(shopCart) {
		this.setState({ shopCart });
	}

	render() {
		const units = this.state.shopCart.orderItems.reduce((total, orderItem) => {
			return total += orderItem.quantity;
		}, 0);

		return (
			<div id="top-cart">
				<a href="#" id="top-cart-trigger">
					<i className="icon-shopping-cart"></i><span>{units}</span>
				</a>
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
}

export default MiniCart;
