import React from 'react';
import appConfig from '../../../config/app-config';

class ProductSummary extends React.Component {

	getProductImageUrl(imageIndex) {
		return `${appConfig.staticContentBasePath}/images/products/${this.props.product.id}/${this.props.product.imagesUrls[imageIndex]}.jpg`;
	}

	render() {
		let product = this.props.product,
			label,
			price;

		if (product.oldPrice) {
			price = (<div className="product-price"><del>{product.oldPrice}€</del> <ins>{product.price}€</ins></div>);
		} else {
			price = (<div className="product-price">{product.price}€</div>);
		}

		if (product.label) {
			label = (<div className="sale-flash">{product.label}</div>); // "50% Off"
		}

		return (
			<div className="product clearfix">
				<div className="product-image">
					<a href="#"><img src={this.getProductImageUrl(0)} alt={product.name}/></a>
					<a href="#"><img src={this.getProductImageUrl(1)} alt={product.name}/></a>
					{label}
					<div className="product-overlay">
						<a href="#" className="add-to-cart">
							<i className="icon-shopping-cart"></i><span> Add to Cart</span>
						</a>
						<a href="include/ajax/shop-item.html" className="item-quick-view">
							<i className="icon-zoom-in2"></i><span> Quick View</span>
						</a>
					</div>
				</div>
				<div className="product-desc">
					<div className="product-title"><h3><a href="#">{product.name}</a></h3></div>
					{price}
				</div>
			</div>
		);
	}
}

export default ProductSummary;
