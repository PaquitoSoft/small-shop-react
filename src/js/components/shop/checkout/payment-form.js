import React from 'react';

import {getText} from '../../../plugins/i18n';

const paymentMethods = ['bank', 'cheque', 'paypal'];

class PaymentForm extends React.Component {

    constructor(props) {
        super(props);
        this.displayName = 'PaymentForm';
        this.state = {
        	selectedPayment: 'paypal'
        };
    }

    toggleSelectedPaymentMethod(paymentMethodCode) {
    	this.setState({
    		selectedPayment: paymentMethodCode
    	});
    }

    getSelectedPaymentMethod() {
    	return this.state.selectedPayment;
    }

    resetForm() {
    	this.setState({
    		selectedPayment: 'paypal'
    	});
    }

    renderPaymentMethod(paymentMethod, index) {
    	return (
    		<div className="payment-method" key={index}>
				<div className="acctitle" onClick={this.toggleSelectedPaymentMethod.bind(this, paymentMethod)}>
					<i className="acc-closed icon-ok-circle"></i>
					<i className="acc-open icon-remove-circle"></i>{getText(`checkout-page.payment.${paymentMethod}.name`)}
				</div>
				<div className={`acc_content clearfix ${this.state.selectedPayment === paymentMethod ? 'selected' : ''}`}>
					{getText(`checkout-page.payment.${paymentMethod}.description`)}
				</div>
			</div>
    	);
    }

    render() {
    	const _paymentMethods = paymentMethods.map(this.renderPaymentMethod, this);

        return (
			<div className="accordion clearfix payment-methods">
				{_paymentMethods}
			</div>
		);
    }
}

export default PaymentForm;
