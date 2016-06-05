import NProgress from 'nprogress';
import '../../styles/vendor/nprogress/nprogress.css';

export function show() {
	NProgress.start();
}

export function hide() {
	NProgress.done();
}
