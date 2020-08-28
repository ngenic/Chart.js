/*!
 * Chart.js v3.0.0-alpha.2
 * https://www.chartjs.org
 * (c) 2020 Chart.js Contributors
 * Released under the MIT License
 */
declare function log10(x: number): number;
declare function isNumber(v: any): boolean;
declare function almostEquals(x: number, y: number, epsilon: number): boolean;
declare function almostWhole(x: number, epsilon: number): number;
declare function sign(x: number): number;
declare function toRadians(degrees: number): number;
declare function toDegrees(radians: number): number;
/**
 * Gets the angle from vertical upright to the point about a centre.
 */
declare function getAngleFromPoint(
  centrePoint: { x: number; y: number },
  anglePoint: { x: number; y: number }
): { angle: number; distance: number };

declare function distanceBetweenPoints(pt1: { x: number; y: number }, pt2: { x: number; y: number }): number;

export { almostEquals, almostWhole, distanceBetweenPoints, getAngleFromPoint, isNumber, log10, sign, toDegrees, toRadians };
