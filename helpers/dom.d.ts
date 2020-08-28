/*!
 * Chart.js v3.0.0-alpha.2
 * https://www.chartjs.org
 * (c) 2020 Chart.js Contributors
 * Released under the MIT License
 */
declare function getMaximumHeight(node: HTMLElement): number;
declare function getMaximumWidth(node: HTMLElement): number;
declare function getRelativePosition(
  evt: MouseEvent,
  chart: { readonly canvas: HTMLCanvasElement }
): { x: number; y: number };
declare function getStyle(el: HTMLElement, property: string): string;
declare function retinaScale(
  chart: {
    currentDevicePixelRatio: number;
    readonly canvas: HTMLCanvasElement;
    readonly width: number;
    readonly height: number;
    readonly ctx: CanvasRenderingContext2D;
  },
  forceRatio: number
): void;

export { getMaximumHeight, getMaximumWidth, getRelativePosition, getStyle, retinaScale };
