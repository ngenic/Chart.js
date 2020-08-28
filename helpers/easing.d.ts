/*!
 * Chart.js v3.0.0-alpha.2
 * https://www.chartjs.org
 * (c) 2020 Chart.js Contributors
 * Released under the MIT License
 */
import { aW as EasingFunction } from './chunks/index';

type EasingFunctionSignature = (t: number) => number;

declare const easing: Record<EasingFunction, EasingFunctionSignature>;

export { EasingFunctionSignature, easing };
