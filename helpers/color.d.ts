/*!
 * Chart.js v3.0.0-alpha.2
 * https://www.chartjs.org
 * (c) 2020 Chart.js Contributors
 * Released under the MIT License
 */
declare function color(value: CanvasGradient): CanvasGradient;
declare function color(value: CanvasPattern): CanvasPattern;
declare function color(
  value:
    | string
    | { r: number; g: number; b: number; a: number }
    | [number, number, number]
    | [number, number, number, number]
): ColorModel;

interface ColorModel {
  rgbString(): string;
  hexString(): string;
  hslString(): string;
  rgb: { r: number; g: number; b: number; a: number };
  valid: boolean;
  mix(color: ColorModel, weight: number): this;
  clone(): ColorModel;
  alpha(a: number): ColorModel;
  clearer(ration: number): ColorModel;
  greyscale(): ColorModel;
  opaquer(ratio: number): ColorModel;
  negate(): ColorModel;
  lighten(ratio: number): ColorModel;
  darken(ratio: number): ColorModel;
  saturate(ratio: number): ColorModel;
  desaturate(ratio: number): ColorModel;
  rotate(deg: number): this;
}

declare function getHoverColor(value: CanvasGradient): CanvasGradient;
declare function getHoverColor(value: CanvasPattern): CanvasPattern;
declare function getHoverColor(value: string): string;

export { ColorModel, color, getHoverColor };
