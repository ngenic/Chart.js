/*!
 * Chart.js v3.0.0-alpha.2
 * https://www.chartjs.org
 * (c) 2020 Chart.js Contributors
 * Released under the MIT License
 */
/**
 * An empty function that can be used, for example, for optional callback.
 */
declare function noop(): void;

/**
 * Returns a unique id, sequentially generated from a global variable.
 * @returns {number}
 * @function
 */
declare function uid(): number;
/**
 * Returns true if `value` is neither null nor undefined, else returns false.
 * @param {*} value - The value to test.
 * @returns {boolean}
 * @since 2.7.0
 */
declare function isNullOrUndef(value: any): value is null | undefined;
/**
 * Returns true if `value` is an array (including typed arrays), else returns false.
 * @param {*} value - The value to test.
 * @returns {boolean}
 * @function
 */
declare function isArray<T = any>(value: any): value is ArrayLike<T>;
/**
 * Returns true if `value` is an object (excluding null), else returns false.
 * @param {*} value - The value to test.
 * @returns {boolean}
 * @since 2.7.0
 */
declare function isObject(value: any): value is object;
/**
 * Returns true if `value` is a finite number, else returns false
 * @param {*} value  - The value to test.
 * @returns {boolean}
 */
declare function isFinite(value: any): value is number;
/**
 * Returns `value` if defined, else returns `defaultValue`.
 * @param {*} value - The value to return if defined.
 * @param {*} defaultValue - The value to return if `value` is undefined.
 * @returns {*}
 */
declare function valueOrDefault<T>(value: T | undefined, defaultValue: T): T;
/**
 * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
 * value returned by `fn`. If `fn` is not a function, this method returns undefined.
 * @param fn - The function to call.
 * @param args - The arguments with which `fn` should be called.
 * @param [thisArg] - The value of `this` provided for the call to `fn`.
 * @returns {*}
 */
declare function callback<T extends (this: TA, ...args: any[]) => R, TA, R>(
  fn: T | undefined,
  args: any[],
  thisArg?: TA
): R | undefined;

/**
 * Note(SB) for performance sake, this method should only be used when loopable type
 * is unknown or in none intensive code (not called often and small loopable). Else
 * it's preferable to use a regular for() loop and save extra function calls.
 * @param loopable - The object or array to be iterated.
 * @param  fn - The function to call for each item.
 * @param [thisArg] - The value of `this` provided for the call to `fn`.
 * @param [reverse] - If true, iterates backward on the loopable.
 */
declare function each<T, TA>(
  loopable: T[],
  fn: (this: TA, v: T, i: number) => void,
  thisArg?: TA,
  reverse?: boolean
): void;
/**
 * Note(SB) for performance sake, this method should only be used when loopable type
 * is unknown or in none intensive code (not called often and small loopable). Else
 * it's preferable to use a regular for() loop and save extra function calls.
 * @param loopable - The object or array to be iterated.
 * @param  fn - The function to call for each item.
 * @param [thisArg] - The value of `this` provided for the call to `fn`.
 * @param [reverse] - If true, iterates backward on the loopable.
 */
declare function each<T, TA>(
  loopable: { [key: string]: T },
  fn: (this: TA, v: T, k: string) => void,
  thisArg?: TA,
  reverse?: boolean
): void;

/**
 * Returns a deep copy of `source` without keeping references on objects and arrays.
 * @param source - The value to clone.
 */
declare function clone<T>(source: T): T;

interface IMergeOptions {
  merger?: (key: string, target: any, source: any, options: any) => any;
}
/**
 * Recursively deep copies `source` properties into `target` with the given `options`.
 * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
 * @param target - The target object in which all sources are merged into.
 * @param source - Object(s) to merge into `target`.
 * @param {object} [options] - Merging options:
 * @param {function} [options.merger] - The merge method (key, target, source, options)
 * @returns {object} The `target` object.
 */
declare function merge<T>(target: T, source: [], options?: IMergeOptions): T;
declare function merge<T, S1>(target: T, source: S1, options?: IMergeOptions): T & S1;
declare function merge<T, S1>(target: T, source: [S1], options?: IMergeOptions): T & S1;
declare function merge<T, S1, S2>(target: T, source: [S1, S2], options?: IMergeOptions): T & S1 & S2;
declare function merge<T, S1, S2, S3>(target: T, source: [S1, S2, S3], options?: IMergeOptions): T & S1 & S2 & S3;
declare function merge<T, S1, S2, S3, S4>(
  target: T,
  source: [S1, S2, S3, S4],
  options?: IMergeOptions
): T & S1 & S2 & S3 & S4;
declare function merge<T>(target: T, source: any[], options?: IMergeOptions): any;

/**
 * Recursively deep copies `source` properties into `target` *only* if not defined in target.
 * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
 * @param target - The target object in which all sources are merged into.
 * @param source - Object(s) to merge into `target`.
 * @returns The `target` object.
 */
declare function mergeIf<T>(target: T, source: []): T;
declare function mergeIf<T, S1>(target: T, source: S1): T & S1;
declare function mergeIf<T, S1>(target: T, source: [S1]): T & S1;
declare function mergeIf<T, S1, S2>(target: T, source: [S1, S2]): T & S1 & S2;
declare function mergeIf<T, S1, S2, S3>(target: T, source: [S1, S2, S3]): T & S1 & S2 & S3;
declare function mergeIf<T, S1, S2, S3, S4>(target: T, source: [S1, S2, S3, S4]): T & S1 & S2 & S3 & S4;
declare function mergeIf<T>(target: T, source: any[]): any;

declare function resolveObjectKey(obj: any, key: string): any;

export { IMergeOptions, callback, clone, each, isArray, isFinite, isNullOrUndef, isObject, merge, mergeIf, noop, resolveObjectKey, uid, valueOrDefault };
