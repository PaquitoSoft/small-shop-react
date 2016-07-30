import React from 'react';
import serialize from 'form-serialize';

import {getText} from '../../../plugins/i18n';

class AddressForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.displayName = 'AddressForm';
	}

	getFormData() {
		return serialize(this.form, { hash: true });
	}

	resetForm() {
		this.form.reset();
	}

	render() {
		return (
			<div className="address-form">
				<h3>{this.props.formTitle}</h3>

				<form id="shipping-form" name="shipping-form" className="nobottommargin" ref={(ref) => this.form = ref}>

					<div className="col_half">
						<label for="shipping-form-name">{getText('checkout-page.address-form.name')}</label>
						<input type="text" id="shipping-form-name" name="firstName" className="sm-form-control" required />
					</div>

					<div className="col_half col_last">
						<label for="shipping-form-lname">{getText('checkout-page.address-form.last-name')}</label>
						<input type="text" id="shipping-form-lname" name="lastName" className="sm-form-control" required />
					</div>

					<div className="clear"></div>

					<div className="col_full">
						<label for="shipping-form-address">{getText('checkout-page.address-form.address')}</label>
						<input type="text" id="shipping-form-address" name="address1" className="sm-form-control" required />
					</div>

					<div className="col_full">
						<input type="text" id="shipping-form-address2" name="address2" className="sm-form-control" />
					</div>

					<div className="col_full">
						<label for="shipping-form-city">{getText('checkout-page.address-form.city')}</label>
						<input type="text" id="shipping-form-city" name="city" className="sm-form-control" required />
					</div>

					<div className="col_half">
						<label for="billing-form-email">{getText('checkout-page.address-form.email')}</label>
						<input type="email" id="billing-form-email" name="email" className="sm-form-control" required />
					</div>

					<div className="col_half">
						<label for="billing-form-phone">{getText('checkout-page.address-form.phone')}</label>
						<input type="text" id="billing-form-phone" name="phone" className="sm-form-control" />
					</div>

					<div className="col_full">
						<label for="shipping-form-message">{getText('checkout-page.address-form.notes')} <small>*</small></label>
						<textarea className="sm-form-control" id="shipping-form-message" name="note" rows="6" cols="30"></textarea>
					</div>

				</form>
			</div>
		);
    }
}

export default AddressForm;

