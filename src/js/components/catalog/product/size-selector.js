import React from 'react';

export default function SizeSelector({sizes: sizesList, onSizeSelected}) {
	if (sizesList.length < 2) return null;

	const sizes = sizesList.map((size, index) => {
		return (<option key={index} value={size.id}>{size.name}</option>);
	});

	return (
		<div className="size-selector">
			<div className="title">Select your size:</div>
			<select className="form-control" onChange={onSizeSelected}>
				{sizes}
			</select>
		</div>
	);
}
