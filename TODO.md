
# TODO
* Testing
* Extract CSS to external files
* Product change size lasts too long


# DONE
* Hot Module Replacement (webpack)
* Reload page when code changes
* Mini-cart
* Deploy (runtime configurations)
* Handle color and size
** Add to cart
** MiniCart
* Shop cart page
* Category products navigation
* Select current category (top and sidebar navigation)
* Global loader indicator
* Both categories menu share some behavior (listen to event to update private
	selected category). Let's create a High Order Component to share that code.
* Last-viewed items
* Show errors
* Checkout page
* i18n
* Reset color, size and quantity selection when changing form product to product
* Category -> Lazy load images
* Animations (example: product change photo)


componentWillMount() {
	console.log('componentWillMount:', arguments);
}

componentDidMount() {
	console.log('componentDidMount:', arguments);
}

componentWillReceiveProps() {
	console.log('componentWillReceiveProps:', arguments);
}

componentWillUpdate() {
	console.log('componentWillUpdate:', arguments);
}

componentDidUpdate() {
	console.log('componentDidUpdate:', arguments);
}

componentWillUnmount() {
	console.log('componentWillUnmount:', arguments);
}
