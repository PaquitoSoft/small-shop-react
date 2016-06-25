import React from 'react';

export default function AddressForm({formName}) {
	return (
		<div className="address-form">
			<h3 className="">{formName}</h3>

			<form id="shipping-form" name="shipping-form" className="nobottommargin">

				<div className="col_half">
					<label for="shipping-form-name">Name:</label>
					<input type="text" id="shipping-form-name" name="shipping-form-name" value="" className="sm-form-control" />
				</div>

				<div className="col_half col_last">
					<label for="shipping-form-lname">Last Name:</label>
					<input type="text" id="shipping-form-lname" name="shipping-form-lname" value="" className="sm-form-control" />
				</div>

				<div className="clear"></div>

				<div className="col_full">
					<label for="shipping-form-companyname">Company Name:</label>
					<input type="text" id="shipping-form-companyname" name="shipping-form-companyname" value="" className="sm-form-control" />
				</div>

				<div className="col_full">
					<label for="shipping-form-address">Address:</label>
					<input type="text" id="shipping-form-address" name="shipping-form-address" value="" className="sm-form-control" />
				</div>

				<div className="col_full">
					<input type="text" id="shipping-form-address2" name="shipping-form-adress" value="" className="sm-form-control" />
				</div>

				<div className="col_full">
					<label for="shipping-form-city">City / Town</label>
					<input type="text" id="shipping-form-city" name="shipping-form-city" value="" className="sm-form-control" />
				</div>

				<div className="col_half">
					<label for="billing-form-email">Email Address:</label>
					<input type="email" id="billing-form-email" name="billing-form-email" value="" className="sm-form-control" />
				</div>

				<div className="col_half">
					<label for="billing-form-phone">Phone:</label>
					<input type="text" id="billing-form-phone" name="billing-form-phone" value="" className="sm-form-control" />
				</div>

				<div className="col_full">
					<label for="shipping-form-message">Notes <small>*</small></label>
					<textarea className="sm-form-control" id="shipping-form-message" name="shipping-form-message" rows="6" cols="30"></textarea>
				</div>

			</form>
		</div>
	);
}
