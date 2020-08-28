/*!
 * Chart.js v3.0.0-alpha.2
 * https://www.chartjs.org
 * (c) 2020 Chart.js Contributors
 * Released under the MIT License
 */
interface IArrayListener<T> {
  _onDataPush?(...item: T[]): void;
  _onDataPop?(): void;
  _onDataShift?(): void;
  _onDataSplice?(index: number, deleteCount: number, ...items: T[]): void;
  _onDataUnshift?(...item: T[]): void;
}

/**
 * Hooks the array methods that add or remove values ('push', pop', 'shift', 'splice',
 * 'unshift') and notify the listener AFTER the array has been altered. Listeners are
 * called on the '_onData*' callbacks (e.g. _onDataPush, etc.) with same arguments.
 */
declare function listenArrayEvents<T>(array: T[], listener: IArrayListener<T>): void;

/**
 * Removes the given array event listener and cleanup extra attached properties (such as
 * the _chartjs stub and overridden methods) if array doesn't have any more listeners.
 */
declare function unlistenArrayEvents<T>(array: T[], listener: IArrayListener<T>): void;

export { IArrayListener, listenArrayEvents, unlistenArrayEvents };
