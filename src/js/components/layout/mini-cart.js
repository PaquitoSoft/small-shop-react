import React from 'react';
import Logger from '../../plugins/logger';
import events from '../../plugins/events-bus';
import * as shopCartApi from '../../api/shop';
import {getProductUrl, getProductImageUrl} from '../../plugins/url-builder';

import Router from '../helpers/router';

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
				this.setState({shopCart});
			})
			.catch(err => {
				logger.error('Could not load shop cart:', err);
			});
	}

	componentWillUnmount() {
		events.bus.removeListener(events.types.PRODUCT_ADDED_TO_CART, this.handleProductAddedToCart);
	}

	onProductAddedToCart(addedOrderItem) {
		// TODO Color and size must also be checked
		const orderItemIndex = this.state.shopCart.orderItems.findIndex(orderItem => orderItem.id === addedOrderItem.id);
		let shopCart = this.state.shopCart;

		if (orderItemIndex !== -1) {
			shopCart.orderItems.splice(orderItemIndex, 1, addedOrderItem);
		} else {
			shopCart.orderItems.push(addedOrderItem);
		}

		this.setState({shopCart});
	}

	navToShopCart() {
		Router.navTo('/shop-cart');
	}

	render() {
		let units = 0,
			totalAmount = 0;

		const orderItems = this.state.shopCart.orderItems.map((orderItem, index) => {
			const productUrl = getProductUrl(orderItem.detail);

			units += orderItem.quantity;
			totalAmount += (orderItem.quantity * orderItem.detail.price);

			// TODO: Show color and size for every item
			return (
				<div className="top-cart-item clearfix" key={index}>
					<div className="top-cart-item-image">
						<a href={productUrl}><img src={getProductImageUrl(orderItem.detail, 0)} alt={orderItem.detail.name} /></a>
					</div>
					<div className="top-cart-item-desc">
						<a href={productUrl}>{orderItem.detail.name}</a>
						<span className="top-cart-item-price">{orderItem.detail.price}€</span>
						<span className="top-cart-item-quantity">x {orderItem.quantity}</span>
					</div>
				</div>
			);
		});

		return (
			<div id="top-cart">
				<a href="/shop-cart" id="top-cart-trigger">
					<i className="icon-shopping-cart"></i><span>{units}</span>
				</a>
				<div className="top-cart-content">
					<div className="top-cart-title">
						<h4>Shopping Cart</h4>
					</div>
					<div className="top-cart-items">
						{orderItems}
					</div>
					<div className="top-cart-action clearfix">
						<span className="fleft top-checkout-price">{totalAmount.toFixed(2)}€</span>
						<button className="button button-3d button-small nomargin fright" onClick={this.navToShopCart}>View Cart</button>
					</div>
				</div>
			</div>
		);
	}
}

export default MiniCart;
