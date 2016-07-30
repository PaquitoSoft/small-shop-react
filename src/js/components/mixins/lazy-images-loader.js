import React from 'react';

class LazyImagesLoader extends React.Component {
	constructor() {
		super();

		this.$lazyComponents = {};

		if ('IntersectionObserver' in window) {
			this.intersectionObserver = new IntersectionObserver(this.onProductInViewport.bind(this));
			this.isNewApiSupported = true;
		}
	}

	onProductInViewport(entries) {
		const visibleEntries = entries
			.filter(entry => {
				if (!!entry.intersectionRatio) {
					this.$lazyComponents[entry.target.getAttribute('data-id')].loadImages();
					return true;
				} else {
					return false;
				}
			});
		setTimeout(() => {
			for (const entry of visibleEntries) {
				this.intersectionObserver.unobserve(entry.target);
			}
		}, 4);
	}

	observeComponent(component) {
		if (this.isNewApiSupported) {
			this.$lazyComponents[component.compId] = component;
			this.intersectionObserver.observe(component.$el);
		} else {
			component.loadImages();
		}
	}
	componentWillUnmount() {
		if (this.isNewApiSupported) {
			this.intersectionObserver.disconnect();
		}
		this.$lazyElements = [];
	}

}

export default LazyImagesLoader;
