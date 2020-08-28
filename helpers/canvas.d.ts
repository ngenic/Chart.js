/*!
 * Chart.js v3.0.0-alpha.2
 * https://www.chartjs.org
 * (c) 2020 Chart.js Contributors
 * Released under the MIT License
 */
import { aM as IChartArea, aw as PointStyle } from './chunks/index';

/**
 * Clears the entire canvas associated to the given `chart`.
 * @param {Chart} chart - The chart for which to clear the canvas.
 */
declare function clear(chart: { ctx: CanvasRenderingContext2D }): void;

declare function clipArea(ctx: CanvasRenderingContext2D, area: IChartArea): void;

declare function unclipArea(ctx: CanvasRenderingContext2D): void;

interface IDrawPointOptions {
  pointStyle: PointStyle;
  rotation?: number;
  radius: number;
  borderWidth: number;
}

declare function drawPoint(ctx: CanvasRenderingContext2D, options: IDrawPointOptions, x: number, y: number): void;

/**
 * Converts the given font object into a CSS font string.
 * @param font a font object
 * @return The CSS font string. See https://developer.mozilla.org/en-US/docs/Web/CSS/font
 */
declare function toFontString(font: { size: number; family: string; style?: string; weight?: string }): string | null;

export { IDrawPointOptions, clear, clipArea, drawPoint, toFontString, unclipArea };
