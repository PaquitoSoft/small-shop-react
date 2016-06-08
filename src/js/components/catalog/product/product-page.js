import React from 'react';
import Logger from '../../../plugins/logger';
import events from '../../../plugins/events-bus';
import * as loader from '../../../plugins/loader';
import * as catalogApi from '../../../api/catalog';
import * as shopCartApi from '../../../api/shop';

import ProductDetailGallery from './product-detail-gallery';
import ProductDetailMainInfo from './product-detail-main-info';
import ColorSelector from './color-selector';
import SizeSelector from './size-selector';
import AddProductToCart from './add-product-to-cart';
import ProductNavigationLinks from './product-navigation-links';
import LastViewedProducts from './last-viewed-products';
import Sidebar from '../shared/sidebar';

import '../../../../styles/pages/catalog/product-page.css';

const logger = new Logger('CategoryPage');

class ProductPage extends React.Component {

	constructor(props) {
		super();

		this.state = {
			selectedColor: props.pageData.product.colors[0].id,
			selectedSize: props.pageData.product.sizes[0].id,
			lastViewedProducts: []
		};

		this.onColorSelected = this.onColorSelected.bind(this);
		this.onSizeSelected = this.onSizeSelected.bind(this);
		this.onAddToCart = this.onAddToCart.bind(this);
	}

	static loadPageData(request) {
		logger.debug("Let's load product page required data...");
		return new Promise((resolve, reject) => {
			let promises = [
				catalogApi.getProductDetails(request.params.productId),
				catalogApi.getPopularProducts(),
				catalogApi.getCategories()
			];

			if (request.params.categoryId) {
				promises.push(catalogApi.getCategoryProducts(request.params.categoryId));
			}

			Promise.all(promises)
				.then(values => {
					resolve({
						product: values[0],
						popularProducts: values[1],
						categories: values[2],
						category: {
							id: request.params.categoryId,
							name: request.params.categoryName
						},
						categoryProducts: values[3]
					});
				})
				.catch(reject);
		});
	}

	componentDidMount() {
		this.setState({
			selectedColor: this.props.pageData.product.colors[0].id,
			selectedSize: this.props.pageData.product.sizes[0].id,
			lastViewedProducts: catalogApi.getLastViewedProducts()
		});
		catalogApi.addLastViewedProducts(this.props.pageData.product);
	}

	componentDidUpdate() {
		catalogApi.addLastViewedProducts(this.props.pageData.product);
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			selectedColor: newProps.pageData.product.colors[0].id,
			selectedSize: newProps.pageData.product.sizes[0].id,
			lastViewedProducts: catalogApi.getLastViewedProducts()
		});
	}


	onColorSelected(color) {
		this.setState({ selectedColor: color.id });
	}

	onSizeSelected(event) {
		this.setState({	selectedSize: event.target.value });
	}

	onAddToCart(quantity, done) {
		let orderItem = {
			productId: this.props.pageData.product.id,
			colorId: this.state.selectedColor,
			sizeId: this.state.selectedSize,
			quantity
		};
		loader.show();
		shopCartApi.addProductToCart(orderItem)
			.then(shopCart => {
				loader.hide();
				events.bus.emit(events.types.SHOP_CART_UPDATED, shopCart);
				done();
			})
			.catch(err => {
				loader.hide();
				logger.error('Could not add product to cart:', err);
				events.bus.emit(events.types.SHOW_MODAL,
					'There was a problem adding this product to shop cart');
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

									<ProductNavigationLinks
										currentProduct={product}
										category={this.props.pageData.category}
										categoryProducts={this.props.pageData.categoryProducts} />

									<ProductDetailMainInfo product={product} />
									<div className="line"></div>

									<ColorSelector
										colors={product.colors}
										onColorSelected={this.onColorSelected}
									/>
									<div className="line"></div>

									<SizeSelector
										sizes={product.sizes}
										onSizeSelected={this.onSizeSelected} />
									{product.sizes.length > 1 ?
										<div className="line"></div> :
										null
									}

									<AddProductToCart onAddProduct={this.onAddToCart}/>
									<div className="line"></div>

								</div>

							</div>

						</div>

						<div className="clear"></div>

						<LastViewedProducts products={this.state.lastViewedProducts} />

						<div className="line"></div>

					</div>

					{/* TODO Pass last viewed items */}
					<Sidebar
						categories={this.props.pageData.categories}
						popularProducts={this.props.pageData.popularProducts}
						lastViewedProductsList={this.state.getLastViewedProducts}
					/>

				</div>

			</div>
		);
	}
}

export default ProductPage;
