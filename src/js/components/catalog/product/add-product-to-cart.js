import React from 'react';

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
			setTimeout(() => {
				// TODO: This might happen when the component has been unmounted
				/*
					This could help:
					handleStoresChanged() {
						if (this.isMounted()) { <
							this.setState(this.getStateFromStores(this.props));
						}
					}
				*/
				this.setState({successMessageHidden: true});
			}, 1500);
		});
	}

	render() {
		return (
			<form className="cart nobottommargin clearfix" method="post" enctype="multipart/form-data">
				<div className="quantity clearfix">
					<input type="button" defaultValue="-" className="minus" onClick={this.onQuantityClick.bind(this, 'subtract')}/>
					<span name="quantity" className="qty">{this.state.quantity}</span>
					<input type="button" defaultValue="+" className="plus" onClick={this.onQuantityClick.bind(this, 'add')}/>
				</div>
				<button type="submit" className="add-to-cart button nomargin" onClick={this.onProductAdd.bind(this)}>Add to cart</button>
					<span className={`label product-added-msg ${this.state.successMessageHidden ? 'hidden': ''}`}>
						Product added
					</span>
			</form>
		);
	}
}

export default AddProductToCart;
