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

export function removeOrderItem(orderItemId) {
	return ajax.remove(`${appConfig.apiHost}/shop-cart/order-item/${orderItemId}`);
}

export function updateOrderItem(orderItem) {
	return ajax.putJson(`${appConfig.apiHost}/shop-cart/order-item`, orderItem);
}

export function orderCheckout(orderAddress, paymentMethodCode) {
	return ajax.postJson(`${appConfig.apiHost}/shop-cart/checkout`, {
		orderAddress, paymentMethodCode
	});
}

export function getOrderDetail(orderId) {
	return ajax.getJson(`${appConfig.apiHost}/shop-cart/order-detail/${orderId}`)
}
