import React from 'react';
import serialize from 'form-serialize';

import { getShopCart, orderCheckout } from '../../../api/shop';
import Logger from '../../../plugins/logger';
import events from '../../../plugins/events-bus';
import {getText} from '../../../plugins/i18n';
import * as loader from '../../../plugins/loader';

import AddressForm from './address-form';
import ShopCartSummary from '../shared/shop-cart-summary';
import ShopCartTotals from '../shared/shop-cart-totals';
import PaymentForm from './payment-form';

import '../../../../styles/pages/shop/checkout-page.css';

const logger = new Logger('Router');

class CheckoutPage extends React.Component {

	static loadPageData() {
		return new Promise((resolve, reject) => {
			getShopCart()
				.then(shopCart => resolve({ shopCart }))
				.catch(reject);
		});
	}

	constructor() {
		super();
		this.onCheckout = this.onCheckout.bind(this);
	}

	onCheckout(event) {
		event.preventDefault();
		const orderAddress = this.addressForm.getFormData(),
			paymentMethodCode = this.paymentForm.getSelectedPaymentMethod();

		loader.show();
		orderCheckout(orderAddress, paymentMethodCode)
			.then(({orderId}) => {
				this.addressForm.resetForm();
				this.paymentForm.resetForm();
				events.bus.emit(events.types.SHOP_CART_UPDATED, {orderItems: []});

				events.bus.emit(events.types.NAVIGATION_REQUESTED, `/order-detail/${orderId}`);
				loader.hide();
			})
			.catch((err) => {
				loader.hide();
				logger.error('onCheckout# Checkout error:', err);
				logger.error(err.stack);
				events.bus.emit(events.types.SHOW_MODAL,
					'There was a problem checking out the order.');
			});
	}

	render() {
		const pageData = this.props.pageData;

		// If there are no items, redirect to (empty) shop-cart page
		if (!pageData.shopCart.orderItems.length) {
			events.bus.emit(events.types.NAVIGATION_REQUESTED, '/shop-cart');
			return null;
		}

		return (
			<div className="content-wrap checkout-page">

				<div className="container clearfix">

					<div className="row clearfix">
						<div className="col-md-6">
							<AddressForm 
								formTitle="Shipping Address"
								ref={ (ref) => this.addressForm = ref }
							/>
						</div>
						
						<div className="col-md-6">
							<ShopCartSummary orderItems={pageData.shopCart.orderItems} />

							<ShopCartTotals shopCart={pageData.shopCart} />

							<PaymentForm ref={ (ref) => this.paymentForm = ref } />

							<a href="#" onClick={this.onCheckout} className="button button-3d fright">{getText('checkout-page.checkout-action')}</a>
						</div>

						<div className="clear bottommargin"></div>

					</div>
				</div>

			</div>
		);
	}

}

export default CheckoutPage;
