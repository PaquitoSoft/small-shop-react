import React from 'react';

class AddProductToCart extends React.Component {
	render() {
		return (
			<form className="cart nobottommargin clearfix" method="post" enctype="multipart/form-data">
				<div className="quantity clearfix">
					<input type="button" defaultValue="-" className="minus"/>
					<input type="text" step="1" min="1" name="quantity" defaultValue="1" title="Qty" className="qty" size="4" disabled/>
					<input type="button" defaultValue="+" className="plus"/>
				</div>
				<button type="submit" className="add-to-cart button nomargin" onClick={this.props.onAddProduct}>Add to cart</button>
			</form>
		);
	}
}

export default AddProductToCart;
