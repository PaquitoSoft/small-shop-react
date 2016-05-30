
# TODO
* Select current category (top and sidebar navigation)
* Shop cart page
* Global loader indicator
* Last-viewed items
* Show errors
* Category -> Lazy load images
* Extract CSS to external files
* Add to cart/Quick view in product summary???
* Subscribe newsletter
* Testing
* i18n
* Login???

# DONE
* Hot Module Replacement (webpack)
* Reload page when code changes
* Mini-cart




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
