import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { getProductImageUrl } from '../../../plugins/url-builder';

class ProductDetailGallery extends React.Component {

	constructor(props) {
		super();

		this.state = {
			selectedImageUrl: getProductImageUrl(props.product, 0)
		};
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			selectedImageUrl: getProductImageUrl(newProps.product, 0)
		});
	}

	updateSelectedImage(imageIndex) {
		this.setState({
			selectedImageUrl: getProductImageUrl(this.props.product, imageIndex)
		});
	}

	render() {
		const product = this.props.product;
		
		const thumbnails = product.imagesUrls.map((image, index) => {
			return (
				<li key={index}>
					<img
						src={getProductImageUrl(product, index)}
						onClick={this.updateSelectedImage.bind(this, index)}
					/>
				</li>
			);
		});

		return (
			<div className="product-image product-gallery">
				<div>
					<div className="main-image">
						<ReactCSSTransitionGroup
							transitionName="blur">
							<img key={Math.random()} src={this.state.selectedImageUrl} alt={product.name}/>
						</ReactCSSTransitionGroup>
					</div>
					<ol className="thumbnails">
						{thumbnails}
					</ol>
				</div>
			</div>
		);
	}

}

export default ProductDetailGallery;
