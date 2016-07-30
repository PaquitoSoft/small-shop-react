import React from 'react';

import { getOrderDetail } from '../../../api/shop';
import { getText } from '../../../plugins/i18n';

import ShopCartSummary from '../shared/shop-cart-summary';
import ShopCartTotals from '../shared/shop-cart-totals';
import AddressSummary from './address-summary';

import '../../../../styles/pages/shop/order-confirmation-page.css';

class OrderConfirmationPage extends React.Component {

	static loadPageData(request) {
		return new Promise((resolve, reject) => {
			getOrderDetail(request.params.orderId)
				.then(orderDetail => resolve({ orderDetail }))
				.catch(reject);
		});
	}

    constructor(props) {
        super(props);
        this.displayName = 'OrderConfirmationPage';
    }

    render() {
    	const orderDetail = this.props.pageData.orderDetail;

        return (
        	<div className="content-wrap order-confirmation-page">
        		<div className="container clearfix">
        			<div className="row clearfix">
        				<div className="col-md-6">
        					<ShopCartSummary orderItems={orderDetail.orderItems} />
        				</div>
        				<div className="col-md-6">
        					<AddressSummary address={orderDetail.address} title={getText('shared.shipping-address')} />

        					<h4 className="payment-method-code">{getText('order-confirmation-page.payment-method')} <span>{getText(`checkout-page.payment.${orderDetail.paymentMethodCode}.name`)}</span></h4>

        					<ShopCartTotals shopCart={orderDetail} title={getText('order-confirmation-page.totals-title')} />
        				</div>
        			</div>
        		</div>
        	</div>
        );
    }
}

export default OrderConfirmationPage;
