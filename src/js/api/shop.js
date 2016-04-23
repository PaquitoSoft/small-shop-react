import * as ajax from '../plugins/ajax';

const infos = [
	{
		title: '100% Original',
		message: 'We guarantee you the sale of Original Brands.',
		icon: 'icon-thumbs-up2'
	},
	{
		title: 'Payment Options',
		message: 'We accept Visa, MasterCard and American Express.',
		icon: 'icon-credit-cards'
	},
	{
		title: 'Free Shipping',
		message: 'Free Delivery to 100+ Locations on orders above $40.',
		icon: 'icon-truck2'
	},
	{
		title: '30-Days Returns',
		message: 'Return or exchange items purchased within 30 days.',
		icon: 'icon-undo',
		isLast: false
	}
];

export function getShopInfo() {
	return Promise.resolve(infos);
}
