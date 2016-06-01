import EventEmitter from 'events';

class EventsBus extends EventEmitter {}

const appEventsBus = new EventsBus();

const eventsTypes = {
	SHOP_CART_UPDATED: 'SHOP_CART_UPDATED'
};

export default {
	bus: appEventsBus,
	types: eventsTypes
};
