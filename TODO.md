
# TODO
* Shop cart page
* Select current category (top and sidebar navigation)
* Global loader indicator
* Last-viewed items
* Show errors
* Sessions to MongoDB
* Category -> Lazy load images
* Extract CSS to external files
* Subscribe newsletter -> Confirmation popup
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
