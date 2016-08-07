import React from 'react';

import { observeElement } from '../../../plugins/lazy-loader';

const PLACEHOLDER_IMAGE_URL = '/images/transparent.png';

class LazyLoadedImage extends React.Component {

	constructor() {
		super();

		this.state = {
			showRealImage: false
		};

		this.onInViewport = this.onInViewport.bind(this);
	}

	componentWillReceiveProps(newProps) {
		this.setState({ showRealImage: false });
	}

	onInViewport() {
		this.setState({ showRealImage: true });
	}

	render() {
		const { imageUrl, imageAlt } = this.props;
		const imageSrc = this.state.showRealImage ? imageUrl : PLACEHOLDER_IMAGE_URL;

		return (
			<img
				src={imageSrc}
				data-src={imageUrl}
				alt={imageAlt}
				ref={$el => $el && observeElement($el, this.onInViewport)}
			/>
		);
	}
	
}

export default LazyLoadedImage;
