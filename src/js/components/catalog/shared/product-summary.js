import React from 'react';
import appConfig from '../../../config/app-config';
import * as urlBuilder from '../../../plugins/url-builder';
import Logger from '../../../plugins/logger';

const logger = new Logger('ProductSummary');

class ProductSummary extends React.Component {

	constructor(props) {
		super(props);
		this.loaderImage = '/images/transparent.png';
		this.state = { showImages: false };
		this.compId = `product-summary-component_${Date.now()}`;
	}

	loadImages() {
		this.setState({ showImages: true });
	}

	componentWillReceiveProps(newProps) {
		this.setState({ showImages: false });
	}

	render() {
		const {product, category, viewportInfo, visibleProducts} = this.props;

		// Lazy load sample: http://w33ble.github.io/understanding-react/demos/lazy-load.html
		let productUrl = urlBuilder.getProductUrl(product, category),
			firstImageUrl = this.state.showImages ? urlBuilder.getProductImageUrl(product, 0) : this.loaderImage,
			secondImageUrl = this.state.showImages ? urlBuilder.getProductImageUrl(product, 1) : this.loaderImage,
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
			<div className="product clearfix" data-id={this.compId} ref={(n) => this.$el = n}>
				<div className="product-image">
					<a href={productUrl}>
						<img
							src={firstImageUrl}
							data-src={urlBuilder.getProductImageUrl(product, 0)}
							alt={product.name} />
					</a>
					<a href={productUrl}>
						<img
							src={secondImageUrl}
							data-src={urlBuilder.getProductImageUrl(product, 1)}
							alt={product.name} />
					</a>
					{label}
				</div>
				<div className="product-desc">
					<div className="product-title"><h3><a href={productUrl}>{product.name}</a></h3></div>
					{price}
				</div>
			</div>
		);
	}
}

// export default function ProductSummary({ product, category, viewportInfo }) {
// 	// Lazy load sample: http://w33ble.github.io/understanding-react/demos/lazy-load.html
// 	let productUrl = urlBuilder.getProductUrl(product, category),
// 		el = this.getDOMNode(),
// 		label,
// 		price;
//
// 	if (product.oldPrice) {
// 		price = (<div className="product-price"><del>{product.oldPrice}€</del> <ins>{product.price}€</ins></div>);
// 	} else {
// 		price = (<div className="product-price">{product.price}€</div>);
// 	}
//
// 	if (product.label) {
// 		label = (<div className="sale-flash">{product.label}</div>); // "50% Off"
// 	}
//
// 	return (
// 		<div className="product clearfix">
// 			<div className="product-image">
// 				<a href={productUrl}><img src={urlBuilder.getProductImageUrl(product, 0)} alt={product.name}/></a>
// 				<a href={productUrl}><img src={urlBuilder.getProductImageUrl(product, 1)} alt={product.name}/></a>
// 				{label}
// 			</div>
// 			<div className="product-desc">
// 				<div className="product-title"><h3><a href={productUrl}>{product.name}</a></h3></div>
// 				{price}
// 			</div>
// 		</div>
// 	);
// }

export default ProductSummary;
