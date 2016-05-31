import React from 'react';
import Logger from '../../../plugins/logger';
import events from '../../../plugins/events-bus';
import {getShopCart} from '../../../api/shop';

import OrderItem from './order-item';
import ShopCartTotals from './shop-cart-totals';

const logger = new Logger('ShopCartPage');

class ShopCartPage extends React.Component {

	constructor(props) {
		super();
		this.state = {shopCart: props.pageData.shopCart};
	}

	static loadPageData() {
		logger.debug("Let's load shop cart page required data...");
		return getShopCart();
	}

	orderItemRemovedHandler(orderItem) {
		logger.warn('TODO: Handle orderItem remove');
		const orderItemIndex = this.state.shopCart.orderItems.findIndex(_orderItem => _orderItem.id === orderItem.id);
		let shopCart = Object.assign({}, this.state.shopCart);
		if (orderItemIndex !== -1) {
			// TODO Call server
		}
	}

	orderItemUpdatedHandler(orderItem, done) {
		// TODO Call server
	}

	render() {
		const shopCart = this.state.shopCart;

		const orderItems = shopCart.orderItems.map((orderItem, index) => {
			return (
				<OrderItem key={index}
					orderItem={orderItem}
					onOrderItemRemoved={orderItemRemovedHandler.bind(this, orderItem)}
					onOrderItemUpdated={orderItemUpdatedHandler.bind(this)}
				/>
			);
		});

		return (
			<div className="content-wrap">

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
								<tr className="cart_item">
									<td colspan="6">
										<div className="row clearfix">
											<div className="col-md-12 col-xs-12 nopadding">
												<a href="#" className="button button-3d notopmargin fright">Proceed to Checkout</a>
											</div>
										</div>
									</td>
								</tr>
							</tbody>

						</table>

					</div>

					<div className="row clearfix">
						<div className="col-md-12 clearfix">
							<ShopCartTotals shopCart={shopCart} />
						</div>
					</div>

				</div>
			</div>
		);
	}

}

export default ShopCartPage;
