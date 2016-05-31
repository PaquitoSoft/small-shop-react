import appConfig from '../config/app-config';
import * as ajax from '../plugins/ajax';

export function getHomeBanner() {
	return ajax.getText(`${appConfig.apiHost}/static/content/catalog/home-banner.html`, {
		ttl: 24 * 60 // minutes
	});
}

export function getCategories() {
	return ajax.getJson(`${appConfig.apiHost}/catalog/category`, {
		ttl: 24 * 60 // minutes
	});
}

export function getFeaturedProducts() {
	return ajax.getJson(`${appConfig.apiHost}/catalog/featured-products`, {
		ttl: 5 // minutes
	});
}

export function getPopularProducts() {
	return ajax.getJson(`${appConfig.apiHost}/catalog/featured-products?count=4`, {
		ttl: 15 // minutes
	});
}

export function getCategoryDetails(categoryId) {
	return ajax.getJson(`${appConfig.apiHost}/catalog/category/${categoryId}`, {
		ttl: 60 // minutes
	});
}

export function getCategoryProducts(categoryId) {
	return ajax.getJson(`${appConfig.apiHost}/catalog/category/${categoryId}/products`, {
		ttl: 60 // minutes
	});
}

export function getProductDetails(productId) {
	return ajax.getJson(`${appConfig.apiHost}/catalog/product/${productId}`, {
		ttl: 60 // minutes
	});
}
