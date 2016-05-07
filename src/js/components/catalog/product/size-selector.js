import React from 'react';

export default function SizeSelector({sizes: sizesList}) {
	const sizes = sizesList.map((size, index) => {
		return (<option key={index} value={size.id}>{size.name}</option>);
	});

	// TODO Must disable sizes which are not available for selected color
	return (
		<div className="size-selector">
			<div className="title">Select your size:</div>
			<select className="form-control">
				{sizes}
			</select>
		</div>
	);
}
