import React from 'react';
import * as urlBuilder from '../../../plugins/url-builder';

class OrderItem extends React.Component {

	constructor(props) {
		super();
		this.state.quantity = props.orderItem.quantity;
	}

	onOrderItemUpdated(mode) {
		const newQuantity = (mode === 'increase') ? this.quantity++ : this.quantity--;
		let orderItem = this.props.orderItem;
		orderItem.quantity = newQuantity;
		this.props.onOrderItemUpdated(orderItem, () => {
			this.setState({quantity: newQuantity});
		});
	}

	render() {
		const orderItem = this.props.orderItem,
			productUrl = urlBuilder.getProductUrl(orderItem.detail);

		return (
			<tr className="cart_item">
				<td className="cart-product-remove">
					<a href="#" className="remove" title="Remove this item" onClick={this.props.onOrderItemRemoved}>
						<i className="icon-trash2"></i>
					</a>
				</td>

				<td className="cart-product-thumbnail">
					<a href="#">
						<img width="64" height="64" src={urlBuilder.getProductImageUrl(orderItem.detail, 0)} alt={orderItem.detail.name}/>
					</a>
				</td>

				<td className="cart-product-name">
					<a href="#">{orderItem.detail.name}</a>
				</td>

				<td className="cart-product-price">
					<span className="amount">{orderItem.detail.price}€</span>
				</td>

				<td className="cart-product-quantity">
					<div className="quantity clearfix">
						<input type="button" value="-" className="minus"
							 onClick={this.onOrderItemUpdated.bind(this, 'decrease')} />
						<span name="quantity" className="qty">{this.state.quantity}</span>
						<input type="button" value="+" className="plus"
							onClick={this.onOrderItemUpdated.bind(this, 'increase')} />
					</div>
				</td>

				<td className="cart-product-subtotal">
					<span className="amount">{(orderItem.detail.price * this.state.quantity).toFixed(2)}</span>
				</td>
			</tr>
		);
	}

}

export default OrderItem;
