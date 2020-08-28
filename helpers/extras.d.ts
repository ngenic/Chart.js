/*!
 * Chart.js v3.0.0-alpha.2
 * https://www.chartjs.org
 * (c) 2020 Chart.js Contributors
 * Released under the MIT License
 */
declare function fontString(pixelSize: number, fontStyle: string, fontFamily: string): string;

/**
 * Request animation polyfill
 */
declare function requestAnimFrame(cb: () => void): void;

export { fontString, requestAnimFrame };
