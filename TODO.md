
# TODO
* Select current category (top and sidebar navigation)
* Shop cart page
* Handle color and size
** Add to cart
** MiniCart
* Global loader indicator
* Last-viewed items
* Show errors
* Category -> Lazy load images
* Extract CSS to external files
* Subscribe newsletter -> Confirmation popup
* Reset color, size and quantity selection when changing form product to product
* Product change size lasts too long
* Testing
* i18n

# DONE
* Hot Module Replacement (webpack)
* Reload page when code changes
* Mini-cart
* Deploy (runtime configurations)



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
