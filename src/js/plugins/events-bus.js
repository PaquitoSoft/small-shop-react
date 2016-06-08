import EventEmitter from 'events';

class EventsBus extends EventEmitter {}

const appEventsBus = new EventsBus();

const eventsTypes = {
	NAVIGATION_START: 'NAVIGATION_START',
	NAVIGATION_END: 'NAVIGATION_END',
	SHOP_CART_UPDATED: 'SHOP_CART_UPDATED',
	LAST_VIEWED_PRODUCTS_UPDATED: 'LAST_VIEWED_PRODUCTS_UPDATED',
	SHOW_MODAL: 'SHOW_MODAL'
};

export default {
	bus: appEventsBus,
	types: eventsTypes
};
