import React from 'react';

import {getText} from '../../../plugins/i18n';

class SizeSelector extends React.Component {

	constructor(props) {
		super(props);
		this.displayName = 'SizeSelector';
	}

	reset() {
		if (this.form) { // There's no selector if we only have one size
			this.form.reset();
		}
	}

	render() {
		if (this.props.sizes.length < 2) return null;

		const sizes = this.props.sizes.map((size, index) => {
			return (<option key={index} value={size.id}>{size.name}</option>);
		});

		return (
			<div className="size-selector">
				<div className="title">{getText('product-page.select-size')}</div>
				<form ref={ref => this.form = ref}>
					<select className="form-control" onChange={this.props.onSizeSelected}>
						{sizes}
					</select>
				</form>
			</div>
		);
	}
}

export default SizeSelector;

/*
export default function SizeSelector({sizes: sizesList, onSizeSelected}) {
	if (sizesList.length < 2) return null;

	const sizes = sizesList.map((size, index) => {
		return (<option key={index} value={size.id}>{size.name}</option>);
	});

	return (
		<div className="size-selector">
			<div className="title">{getText('product-page.select-size')}</div>
			<select className="form-control" onChange={onSizeSelected}>
				{sizes}
			</select>
		</div>
	);
}
*/