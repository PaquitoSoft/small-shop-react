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
		this.onShopCartUpdated = this.onShopCartUpdated.bind(this);
	}

	componentDidMount() {
		events.bus.on(events.types.SHOP_CART_UPDATED, this.onShopCartUpdated);

		shopCartApi.getShopCart()
			.then(shopCart => {
				this.setState({shopCart});
			})
			.catch(err => {
				logger.error('Could not load shop cart:', err);
			});
	}

	componentWillUnmount() {
		events.bus.removeListener(events.types.SHOP_CART_UPDATED, this.onShopCartUpdated);
	}

	onShopCartUpdated(shopCart) {
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
			const colorName = orderItem.detail.colors.filter(color => orderItem.colorId === color.id)[0].name;
			const sizeName = orderItem.detail.sizes.filter(size => orderItem.sizeId === size.id)[0].name;

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
						<span className="top-cart-item-color">{colorName}</span>
						<span className="top-cart-item-size">({sizeName})</span>
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
