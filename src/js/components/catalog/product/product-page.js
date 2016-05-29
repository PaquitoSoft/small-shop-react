import React from 'react';
import Logger from '../../../plugins/logger';
import events from '../../../plugins/events-bus';
import * as catalogApi from '../../../api/catalog';
import * as shopCartApi from '../../../api/shop';

import ProductDetailGallery from './product-detail-gallery';
import ProductDetailMainInfo from './product-detail-main-info';
import ColorSelector from './color-selector';
import SizeSelector from './size-selector';
import AddProductToCart from './add-product-to-cart';
import Sidebar from '../shared/sidebar';

import '../../../../styles/pages/catalog/product-page.css';

const logger = new Logger('CategoryPage');

// TODO Navigate through category's products

class ProductPage extends React.Component {

	constructor(props) {
		super();

		this.state = {
			selectedColor: props.pageData.product.colors[0].id,
			selectedSize: props.pageData.product.sizes[0].id
		};

		this.selectColorHandler = this.onColorSelected.bind(this);
		this.addToCartHandler = this.onAddToCart.bind(this);
	}

	static loadPageData(request) {
		logger.debug("Let's load product page required data...");
		return new Promise((resolve, reject) => {
			Promise.all([
				catalogApi.getProductDetails(request.params.productId),
				catalogApi.getPopularProducts(),
				catalogApi.getCategories()
			])
			.then(values => {
				resolve({
					product: values[0],
					popularProducts: values[1],
					categories: values[2]
				});
			})
			.catch(reject);
		});
	}

	componentDidMount() {
		this.setState({
			selectedColor: this.props.pageData.product.colors[0].id,
			selectedSize: this.props.pageData.product.sizes[0].id
		});
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			selectedColor: newProps.pageData.product.colors[0].id,
			selectedSize: newProps.pageData.product.sizes[0].id
		});
	}

	onColorSelected(color) {
		logger.info('Selected color:', color);
	}

	onAddToCart(quantity, done) {
		let orderItem = {
			productId: this.props.pageData.product.id,
			colorId: this.state.selectedColor,
			sizeId: this.state.selectedSize,
			quantity
		};
		shopCartApi.addProductToCart(orderItem)
			.then(data => {
				// TODO Show success + notify mini shop cart
				logger.debug('Product added to cart:', data.detail);
				events.bus.emit(events.types.PRODUCT_ADDED_TO_CART, data);
				done();
			})
			.catch(err => {
				// TODO Show error
				logger.error('Could not add product to cart:', err);
				console.warn(err.stack);
			});
	}

	render() {
		const product = this.props.pageData.product;

		return (
			<div className="content-wrap product-page">

				<div className="container clearfix">

					<div className="postcontent nobottommargin clearfix col_last">

						<div className="single-product">

							<div className="product">

								<div className="col_half">
									<ProductDetailGallery product={product} />
								</div>

								<div className="col_half col_last product-desc">

									<ProductDetailMainInfo product={product} />
									<div className="line"></div>

									<ColorSelector
										colors={product.colors}
										onColorSelected={this.selectColorHandler}
									/>
									<div className="line"></div>

									<SizeSelector sizes={product.sizes} />
									{product.sizes.length > 1 ?
										<div className="line"></div> :
										null
									}

									<AddProductToCart onAddProduct={this.addToCartHandler}/>
									<div className="line"></div>

								</div>

							</div>

						</div>

						<div className="clear"></div>
						<div className="line"></div>

					</div>

					{/* TODO Pass last viewed items */}
					<Sidebar
						categories={this.props.pageData.categories}
						popularProducts={this.props.pageData.popularProducts}
						lastViewedProductsList={[]}
					/>

				</div>

			</div>
		);
	}
}

export default ProductPage;
