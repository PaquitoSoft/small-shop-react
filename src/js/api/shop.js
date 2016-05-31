import appConfig from '../config/app-config';
import * as ajax from '../plugins/ajax';

export function getShopInfo() {
	return ajax.getJson(`${appConfig.apiHost}/static/content/shop/shop-info.json`, {
		ttl: 24 * 60 // minutes
	});
}

export function getShopCart() {
	return ajax.getJson(`${appConfig.apiHost}/shop-cart`);
}

export function addProductToCart(data) {
	return ajax.postJson(`${appConfig.apiHost}/shop-cart/product`, data);
}
