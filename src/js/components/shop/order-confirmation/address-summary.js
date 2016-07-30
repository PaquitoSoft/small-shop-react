import React from 'react';

export default function AddressSummary({address, title}) {
	return (
		<section className="address-summary">
			<h4>{title}</h4>
			<div>{address.firstName}</div>
			<div>{address.address1}</div>
			<div>{address.address2}</div>
			<div>{address.phone}</div>
			<div>{address.email}</div>
		</section>
	);
}
