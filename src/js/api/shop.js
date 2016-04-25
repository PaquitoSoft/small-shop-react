import appConfig from '../config/app-config';
import * as ajax from '../plugins/ajax';

export function getShopInfo() {
	return ajax.getJson(`${appConfig.staticContentBasePath}/content/shop/shop-info.json`, {
		ttl: 24 * 60 // minutes
	});
}
