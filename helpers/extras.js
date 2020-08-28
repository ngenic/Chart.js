/*!
 * Chart.js v3.0.0-alpha.2
 * https://www.chartjs.org
 * (c) 2020 Chart.js Contributors
 * Released under the MIT License
 */
function fontString(pixelSize, fontStyle, fontFamily) {
	return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
}
const requestAnimFrame = (function() {
	if (typeof window === 'undefined') {
		return function(callback) {
			return callback();
		};
	}
	return window.requestAnimationFrame;
}());
function throttled(fn, thisArg) {
	let ticking = false;
	let args = [];
	return function(...rest) {
		args = Array.prototype.slice.call(rest);
		if (!ticking) {
			ticking = true;
			requestAnimFrame.call(window, () => {
				ticking = false;
				fn.apply(thisArg, args);
			});
		}
	};
}

export { fontString, requestAnimFrame, throttled };
