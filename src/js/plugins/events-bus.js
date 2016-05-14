import EventEmitter from 'events';

class EventsBus extends EventEmitter {}

const appEventsBus = new EventsBus();

const eventsTypes = {
	PRODUCT_ADDED_TO_CART: 'PRODUCT_ADDED_TO_CART'
};

export default {
	bus: appEventsBus,
	types: eventsTypes
};
