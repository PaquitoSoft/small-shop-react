import React from 'react';

import { getShopCart } from '../../../api/shop';

import AddressForm from './address-form';
import ShopCartSummary from './shop-cart-summary';
import ShopCartTotals from '../shared/shop-cart-totals';
import PaymentForm from './payment-form';

import '../../../../styles/pages/shop/checkout-page.css';

class CheckoutPage extends React.Component {

	static loadPageData() {
		return new Promise((resolve, reject) => {
			getShopCart()
				.then(shopCart => resolve({shopCart}))
				.catch(reject);
		});
	}

	render() {
		const pageData = this.props.pageData;

		return (
			<div className="content-wrap checkout-page">

				<div className="container clearfix">

					<div className="row clearfix">
						<div className="col-md-6">
							<AddressForm formName="Billing Address" />
						</div>

						<div className="col-md-6">
							<AddressForm formName="Shipping Address" />
						</div>

						<div className="clear bottommargin"></div>

						<div className="col-md-6">
							<ShopCartSummary orderItems={pageData.shopCart.orderItems} />
						</div>

						<div className="col-md-6">
							<ShopCartTotals shopCart={pageData.shopCart} />

							<PaymentForm />

							<a href="#" className="button button-3d fright">Place Order</a>
						</div>
					</div>
				</div>

			</div>
		);
	}

}

export default CheckoutPage;
