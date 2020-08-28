/*!
 * Chart.js v3.0.0-alpha.2
 * https://www.chartjs.org
 * (c) 2020 Chart.js Contributors
 * Released under the MIT License
 */
interface IRTLAdapter {
  x(x: number): number;
  setWidth(w: number): void;
  textAlign(align: 'center' | 'left' | 'right'): 'center' | 'left' | 'right';
  xPlus(x: number, value: number): number;
  leftForLtr(x: number, itemWidth: number): number;
}
declare function getRtlAdapter(rtl: boolean, rectX: number, width: number): IRTLAdapter;

declare function overrideTextDirection(ctx: CanvasRenderingContext2D, direction: 'ltr' | 'rtl'): void;

declare function restoreTextDirection(ctx: CanvasRenderingContext2D, original?: [string, string]): void;

export { IRTLAdapter, getRtlAdapter, overrideTextDirection, restoreTextDirection };
