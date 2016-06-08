
# TODO
* Last-viewed items
* Show errors
* Sessions to MongoDB
* Category -> Lazy load images
* Checkout page
* Extract CSS to external files
* Reset color, size and quantity selection when changing form product to product
* Hide shop-cart when navigating to a new page
* Product change size lasts too long
* Testing
* i18n

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


componentWillMount() {
	console.log('componentWillMount:', arguments);
}

componentDidMount() {
	console.log('componentDidMount:', arguments);
	console.log(this.props.pageData.product.id);
}

componentWillReceiveProps() {
	console.log('componentWillReceiveProps:', arguments);
}

componentWillUpdate() {
	console.log('componentWillUpdate:', arguments);
}

componentDidUpdate() {
	console.log('componentDidUpdate:', arguments);
	console.log(this.props.pageData.product.id);
}

componentWillUnmount() {
	console.log('componentWillUnmount:', arguments);
}
