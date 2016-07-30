import React from 'react';

import {getText} from '../../../plugins/i18n';

class AddProductToCart extends React.Component {

	constructor() {
		super();
		this.state = {
			quantity: 1,
			successMessageHidden: true
		};
	}

	onQuantityClick(action) {
		let qty = (action === 'add') ? this.state.quantity + 1  : this.state.quantity - 1;
		this.setState({
			quantity: Math.max(qty, 1)
		});
	}

	onProductAdd(event) {
		event.preventDefault();
		this.props.onAddProduct(this.state.quantity, () => {
			this.setState({successMessageHidden: false});
			this.timer = setTimeout(() => {
				this.setState({successMessageHidden: true});
			}, 1500);
		});
	}

	componentWillUnmount() {
		clearTimeout(this.timer);
	}

	componentWillReceiveProps() {
		this.setState({quantity: 1});
	}

	render() {
		return (
			<form className="cart nobottommargin clearfix" method="post" enctype="multipart/form-data">
				<div className="quantity clearfix">
					<input type="button" defaultValue="-" className="minus" onClick={this.onQuantityClick.bind(this, 'subtract')}/>
					<span name="quantity" className="qty">{this.state.quantity}</span>
					<input type="button" defaultValue="+" className="plus" onClick={this.onQuantityClick.bind(this, 'add')}/>
				</div>
				<button type="submit" className="add-to-cart button nomargin" onClick={this.onProductAdd.bind(this)}>{getText('product-page.add-to-cart')}</button>
				<span className={`label product-added-msg ${this.state.successMessageHidden ? 'hidden': ''}`}>
					{getText('product-page.product-added')}
				</span>
			</form>
		);
	}
}

export default AddProductToCart;
