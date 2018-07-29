// Type definitions for L-Overpass-Layer by GuillaumeAmat
// Project: https://github.com/GuillaumeAmat/leaflet-overpass-layer
// Definitions by: Oliver Schörwerth <https://github.com/grafzahl-io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as L from 'leaflet';

declare module 'leaflet' {
	interface OverPassLayer {
	  options: OverPassLayerOptions;
	  initialize(options: OverPassLayerOptions): void;
	  _getPoiPopupHTML(tags: string[], id:string|number): HTMLElement;
	  _buildRequestBox(bounds: L.LatLngBounds): L.Rectangle;
	 	_addRequestBox(box: L.Layer): L.Layer;
	 	_getRequestBoxes(): void;
	 	_removeRequestBoxes(): L.LayerGroup;
	 	_addResponseBox(box: L.Layer): L.LayerGroup;
	 	_addResponseBoxes(requestBoxes: L.Layer[]): void;
	 	_isFullyLoadedBounds(bounds: L.LatLngBounds, loadedBounds: L.LatLngBounds): boolean;
	 	_getLoadedBounds(): L.LatLngBounds;
	 	_addLoadedBounds(bounds: L.LatLngBounds): void;
	 	/**
	 	 * @todo set return type
	 	 */
	 	_buildClipsFromBounds(bounds: L.LatLngBounds): any;
	 	 	/**
	 	 * @todo set types
	 	 */
	 	_buildBoundsFromClips(clis: any): any;
	 	_buildOverpassQueryFromQueryAndBounds(query: string,bounds: L.LatLngBounds): string;
	 	_buildOverpassUrlFromEndPointAndQuery(endPoint: string, query: string): string;
	 	_buildLargerBounds(bounds: L.LatLngBounds): L.LatLngBounds;
	 	 	/**
	 	 * @todo set types
	 	 */
	 	_setRequestInProgress(isInProgress: any): void;
	 	_isRequestInProgress(): any;
	 	_hasNextRequest(): boolean;
	 	 	/**
	 	 * @todo set types
	 	 */
	 	_getNextRequest(): any;
	 	_setNextRequest(nextRequest: any): void;
		_removeNextRequest(): void;
		 	 	/**
	 	 * @todo set types
	 	 */
		_prepareRequest(): any;
		 	 	/**
	 	 * @todo set types
	 	 */
		_sendRequest(bounds: L.LatLngBounds): any;
		_onRequestLoad(xhr: any, bounds: L.LatLngBounds): void;
		_onRequestTimeout(xhr: any, url: string, bounds: L.LatLngBounds): void;
		_onRequestLoadCallback(bounds: L.LatLngBounds): void;
		_onRequestCompleteCallback(): void;
		onAdd(map: L.Map): void;
		onRemove(map: L.Map): void;
		setQuery(query: string): void;
		_resetData(): void;
		getData(): any;
	}

	class OverPassLayer {
		constructor(options?: OverPassLayerOptions);
	}

	interface OverPassLayerOptions {
		debug?: boolean;
		minZoom?: number;
		endpoint?: string;
		query: string;
		loadedBounds?: L.LatLngBounds; // could be also LatLngBoundsLiteral
		markerIcon?: string|null;
		timeout?: number;
		retryOnTimeout?: boolean;
		noInitialRequest?: boolean;
	  beforeRequest?(): void;
	  afterRequest?(): void;
	  /**
	   * @todo define data
	   */
	  onSuccess?(data: any): void;
	  onError?(): void;
	  onTimeout?(): void;
	  minZoomIndicatorEnabled?: boolean;
	  minZoomIndicatorOptions?: { minZoomMessageNoLayer: string, minZoomMessage: string };
	}
}

