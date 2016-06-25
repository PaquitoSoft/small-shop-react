export default Object.freeze({
	// Route:page-component-path (Base path: /src/js/components/)
	'/': 'catalog/home/home-page',
	'/category/:categoryName/:categoryId': 'catalog/category/category-page',
	'/category/:categoryName/:categoryId/product/:productName/:productId': 'catalog/product/product-page',
	'/product/:productName/:productId': 'catalog/product/product-page',
	'/shop-cart': 'shop/shop-cart/shop-cart-page',
	'/checkout': 'shop/checkout/checkout-page'
});
