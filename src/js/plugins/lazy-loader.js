
const OBSERVED_ELEMENT_ID_KEY = '_observedElementId';

let observer;
let isApiSupported = false;

let entryInViewportCallbacks = {};
let counter = 0;

function _loadImage(imageElement) {
	imageElement.setAttribute('src', imageElement.getAttribute('data-src'));
}

function _onComponentInViewport(entries) {
	entries.filter(entry => {
		if (!!entry.intersectionRatio) {
			const callback = entryInViewportCallbacks[
				entry.target.getAttribute(OBSERVED_ELEMENT_ID_KEY)
			];
			if (callback) {
				callback.call();
			}

			// entry.target.style.border = '1px solid blue';
			setTimeout(function() {
				observer.unobserve(entry.target);
			}, 4);

			return true;
		} else {
			return false;
		}
	});
}

// Initialize shared observer if supported
if ('IntersectionObserver' in window) {
	observer = new IntersectionObserver(_onComponentInViewport, {
		rootMargin: '50% 0%'
	});
	isApiSupported = true;
}

/* ------------------------------------------------------------------- */

export function observeElement($el, onInViewPort) {
	if (isApiSupported) {
		let id = counter++;
		$el.setAttribute(OBSERVED_ELEMENT_ID_KEY, id);
		entryInViewportCallbacks[id] = onInViewPort;
		observer.observe($el)
	} else {
		onInViewPort.call();
	}
}
