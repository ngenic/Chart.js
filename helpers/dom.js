/*!
 * Chart.js v3.0.0-alpha.2
 * https://www.chartjs.org
 * (c) 2020 Chart.js Contributors
 * Released under the MIT License
 */
function isConstrainedValue(value) {
	return value !== undefined && value !== null && value !== 'none';
}
function _getParentNode(domNode) {
	let parent = domNode.parentNode;
	if (parent && parent.toString() === '[object ShadowRoot]') {
		parent = parent.host;
	}
	return parent;
}
function parseMaxStyle(styleValue, node, parentProperty) {
	let valueInPixels;
	if (typeof styleValue === 'string') {
		valueInPixels = parseInt(styleValue, 10);
		if (styleValue.indexOf('%') !== -1) {
			valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
		}
	} else {
		valueInPixels = styleValue;
	}
	return valueInPixels;
}
function getConstraintDimension(domNode, maxStyle, percentageProperty) {
	const view = document.defaultView;
	const parentNode = _getParentNode(domNode);
	const constrainedNode = view.getComputedStyle(domNode)[maxStyle];
	const constrainedContainer = view.getComputedStyle(parentNode)[maxStyle];
	const hasCNode = isConstrainedValue(constrainedNode);
	const hasCContainer = isConstrainedValue(constrainedContainer);
	const infinity = Number.POSITIVE_INFINITY;
	if (hasCNode || hasCContainer) {
		return Math.min(
			hasCNode ? parseMaxStyle(constrainedNode, domNode, percentageProperty) : infinity,
			hasCContainer ? parseMaxStyle(constrainedContainer, parentNode, percentageProperty) : infinity);
	}
}
function getStyle(el, property) {
	return el.currentStyle ?
		el.currentStyle[property] :
		document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
}
function getConstraintWidth(domNode) {
	return getConstraintDimension(domNode, 'max-width', 'clientWidth');
}
function getConstraintHeight(domNode) {
	return getConstraintDimension(domNode, 'max-height', 'clientHeight');
}
function _calculatePadding(container, padding, parentDimension) {
	padding = getStyle(container, padding);
	if (padding === '') {
		return 0;
	}
	return padding.indexOf('%') > -1 ? parentDimension * parseInt(padding, 10) / 100 : parseInt(padding, 10);
}
function getRelativePosition(evt, chart) {
	const e = evt.originalEvent || evt;
	const touches = e.touches;
	const source = touches && touches.length ? touches[0] : e;
	const clientX = source.clientX;
	const clientY = source.clientY;
	const x = source.offsetX || source.layerX || clientX;
	const y = source.offsetY || source.layerY || clientY;
	if (x !== clientX && y !== clientY) {
		return {x, y};
	}
	const canvasElement = chart.canvas;
	const devicePixelRatio = chart.currentDevicePixelRatio;
	const boundingRect = canvasElement.getBoundingClientRect();
	const paddingLeft = parseFloat(getStyle(canvasElement, 'padding-left'));
	const paddingTop = parseFloat(getStyle(canvasElement, 'padding-top'));
	const paddingRight = parseFloat(getStyle(canvasElement, 'padding-right'));
	const paddingBottom = parseFloat(getStyle(canvasElement, 'padding-bottom'));
	const width = boundingRect.right - boundingRect.left - paddingLeft - paddingRight;
	const height = boundingRect.bottom - boundingRect.top - paddingTop - paddingBottom;
	return {
		x: Math.round((x - boundingRect.left - paddingLeft) / (width) * canvasElement.width / devicePixelRatio),
		y: Math.round((y - boundingRect.top - paddingTop) / (height) * canvasElement.height / devicePixelRatio)
	};
}
function fallbackIfNotValid(measure, fallback) {
	return typeof measure === 'number' ? measure : fallback;
}
function getMaximumWidth(domNode) {
	const container = _getParentNode(domNode);
	if (!container) {
		return fallbackIfNotValid(domNode.clientWidth, domNode.width);
	}
	const clientWidth = container.clientWidth;
	const paddingLeft = _calculatePadding(container, 'padding-left', clientWidth);
	const paddingRight = _calculatePadding(container, 'padding-right', clientWidth);
	const w = clientWidth - paddingLeft - paddingRight;
	const cw = getConstraintWidth(domNode);
	return isNaN(cw) ? w : Math.min(w, cw);
}
function getMaximumHeight(domNode) {
	const container = _getParentNode(domNode);
	if (!container) {
		return fallbackIfNotValid(domNode.clientHeight, domNode.height);
	}
	const clientHeight = container.clientHeight;
	const paddingTop = _calculatePadding(container, 'padding-top', clientHeight);
	const paddingBottom = _calculatePadding(container, 'padding-bottom', clientHeight);
	const h = clientHeight - paddingTop - paddingBottom;
	const ch = getConstraintHeight(domNode);
	return isNaN(ch) ? h : Math.min(h, ch);
}
function retinaScale(chart, forceRatio) {
	const pixelRatio = chart.currentDevicePixelRatio = forceRatio || (typeof window !== 'undefined' && window.devicePixelRatio) || 1;
	const {canvas, width, height} = chart;
	canvas.height = height * pixelRatio;
	canvas.width = width * pixelRatio;
	chart.ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
	if (canvas.style && !canvas.style.height && !canvas.style.width) {
		canvas.style.height = height + 'px';
		canvas.style.width = width + 'px';
	}
}
const supportsEventListenerOptions = (function() {
	let passiveSupported = false;
	try {
		const options = {
			get passive() {
				passiveSupported = true;
				return false;
			}
		};
		window.addEventListener('test', null, options);
		window.removeEventListener('test', null, options);
	} catch (e) {
	}
	return passiveSupported;
}());
function readUsedSize(element, property) {
	const value = getStyle(element, property);
	const matches = value && value.match(/^(\d+)(\.\d+)?px$/);
	return matches ? +matches[1] : undefined;
}

export { _getParentNode, getMaximumHeight, getMaximumWidth, getRelativePosition, getStyle, readUsedSize, retinaScale, supportsEventListenerOptions };
