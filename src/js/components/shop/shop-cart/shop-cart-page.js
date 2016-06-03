import React from 'react';
import Logger from '../../../plugins/logger';
import events from '../../../plugins/events-bus';
import {getShopCart, removeOrderItem, updateOrderItem} from '../../../api/shop';

import OrderItem from './order-item';
import ShopCartTotals from './shop-cart-totals';
import EmptyShopCartMessage from './empty-shop-cart-message';

import '../../../../styles/pages/shop/shop-cart-page.css';

const logger = new Logger('ShopCartPage');

class ShopCartPage extends React.Component {

	constructor(props) {
		super();
	}

	static loadPageData() {
		logger.debug("Let's load shop cart page required data...");
		return new Promise((resolve, reject) => {
			getShopCart()
				.then(shopCart => resolve({shopCart}))
				.catch(reject);
		});
	}

	componentWillMount() {
		this.state = {shopCart: this.props.pageData.shopCart};
	}

	orderItemRemovedHandler(orderItem) {
		logger.debug('TODO: Handle orderItem remove:', orderItem.id);

		removeOrderItem(orderItem.id)
			.then(shopCart => {
				this.setState({shopCart}, () => {
					events.bus.emit(events.types.SHOP_CART_UPDATED, shopCart);
				});
			})
			.catch(err => {
				logger.warn('Error removing order-item:', err);
				console.log(err.stack);
			});
	}

	orderItemUpdatedHandler(orderItem, done) {
		// TODO Call server
		logger.info('OrderItem to be updated:', orderItem);
		updateOrderItem(orderItem)
			.then(shopCart => {
				this.setState({shopCart});
				done();
				events.bus.emit(events.types.SHOP_CART_UPDATED, shopCart);
			})
			.catch(err => {
				// TODO Show error
				logger.error('Error updating shop-cart:', err);
			});
	}

	render() {
		const shopCart = this.state.shopCart;

		if (!shopCart.orderItems.length) {
			// TODO Handle empty shop cart
			return (
				<div className="content-wrap shop-cart-page">
					<EmptyShopCartMessage />
				</div>
			);
		}

		const orderItems = shopCart.orderItems.map((orderItem, index) => {
			return (
				<OrderItem key={index}
					orderItem={orderItem}
					onOrderItemRemoved={this.orderItemRemovedHandler.bind(this, orderItem)}
					onOrderItemUpdated={this.orderItemUpdatedHandler.bind(this)}
				/>
			);
		});

		return (
			<div className="content-wrap shop-cart-page">

				<div className="container clearfix">

					<div className="table-responsive bottommargin">

						<table className="table cart">
							<thead>
								<tr>
									<th className="cart-product-remove">&nbsp;</th>
									<th className="cart-product-thumbnail">&nbsp;</th>
									<th className="cart-product-name">Product</th>
									<th className="cart-product-price">Unit Price</th>
									<th className="cart-product-quantity">Quantity</th>
									<th className="cart-product-subtotal">Total</th>
								</tr>
							</thead>
							<tbody>
								{orderItems}
								<tr className="cart_item">
									<td colSpan="6">
										<div className="row clearfix">
											<div className="col-md-6 col-xs-6 nopadding"></div>
											<div className="col-md-6 col-xs-6 nopadding">
												<a href="#" className="button button-3d notopmargin fright">Proceed to Checkout</a>
											</div>
										</div>
									</td>
								</tr>
							</tbody>

						</table>

					</div>

					<div className="row clearfix">
						<div className="col-md-6"></div>
						<div className="col-md-6 clearfix">
							<ShopCartTotals shopCart={shopCart} />
						</div>
					</div>

				</div>
			</div>
		);
	}

}

export default ShopCartPage;
