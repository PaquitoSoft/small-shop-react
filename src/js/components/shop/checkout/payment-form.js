import React from 'react';

export default function PaymentForm() {
	return (
		<div className="accordion clearfix">
			<div className="acctitle">
				<i className="acc-closed icon-ok-circle"></i>
				<i className="acc-open icon-remove-circle"></i>Direct Bank Transfer
			</div>
			<div className="acc_content clearfix" style={{display: 'none'}}>
				Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
			</div>

			<div className="acctitle">
				<i className="acc-closed icon-ok-circle"></i>
				<i className="acc-open icon-remove-circle"></i>Cheque Payment
			</div>
			<div className="acc_content clearfix" style={{display: 'none'}}>
				Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum.
			</div>

			<div className="acctitle acctitlec">
				<i className="acc-closed icon-ok-circle"></i>
				<i className="acc-open icon-remove-circle"></i>Paypal
			</div>
			<div className="acc_content clearfix" style={{display: 'block'}}>
				Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus. Aenean lacinia bibendum nulla sed consectetur.
			</div>
		</div>
	);
}
