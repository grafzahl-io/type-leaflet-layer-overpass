// Type definitions for Leaflet-Overpass-Layer by GuillaumeAmat
// Project: https://github.com/GuillaumeAmat/leaflet-overpass-layer
// Definitions by: Oliver Schörwerth <https://github.com/grafzahl-io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.5

import * as Leaflet from 'leaflet';

export as namespace Lop;

export interface L {
  OverPassLayer: OverPassLayer;
}

// -- Leaflet-Overpass-Layer plugin ---------------------------------

export interface OverPassLayer {
  options: OverPassLayerOptions;
  initialize(options: OverPassLayerOptions): void,
  _getPoiPopupHTML(tags: string[], id:string|number): HTMLElement,
  _buildRequestBox(bounds: Leaflet.latlngBounds): Leaflet.Rectangle,
 	_addRequestBox(box: Leaflet.Layer): Leaflet.Layer,
 	_getRequestBoxes(): void,
 	_removeRequestBoxes(): Leaflet.LayerGroup,
 	_addResponseBox(box: Leaflet.Layer): Leaflet.LayerGroup,
 	_addResponseBoxes(requestBoxes: Leaflet.Layer[]): void,
 	_isFullyLoadedBounds(bounds: Leaflet.latlngBounds, loadedBounds: Leaflet.latlngBounds): boolean,
 	_getLoadedBounds(): Leaflet.latlngBounds,
 	_addLoadedBounds(bounds: Leaflet.latlngBounds): void,
 	/**
 	 * @todo set return type
 	 */
 	_buildClipsFromBounds(bounds: Leaflet.latlngBounds): any,
 	 	/**
 	 * @todo set types
 	 */
 	_buildBoundsFromClips(clis: any): any,
 	_buildOverpassQueryFromQueryAndBounds(query: string,bounds: Leaflet.latlngBounds): string,
 	_buildOverpassUrlFromEndPointAndQuery(endPoint: string, query: string): string,
 	_buildLargerBounds(bounds: Leaflet.latlngBounds): Leaflet.latlngBounds,
 	 	/**
 	 * @todo set types
 	 */
 	_setRequestInProgress(isInProgress: any): void,
 	_isRequestInProgress(): any,
 	_hasNextRequest(): boolean,
 	 	/**
 	 * @todo set types
 	 */
 	_getNextRequest(); ,
 	_setNextRequest(nextRequest: ): void,
	_removeNextRequest():void,
	 	 	/**
 	 * @todo set types
 	 */
	_prepareRequest(): any,
	 	 	/**
 	 * @todo set types
 	 */
	_sendRequest(bounds: Leaflet.latlngBounds): any,
	_onRequestLoad(xhr: any, bounds: Leaflet.latlngBounds): void,
	_onRequestTimeout(xhr: any, url: string, bounds: Leaflet.latlngBounds): void,
	_onRequestLoadCallback(bounds: Leaflet.latlngBounds): void,
	_onRequestCompleteCallback(): void,
	onAdd(map: Leaflet.Map): void,
	onRemove(map: Leaflet.Map): void,
	setQuery(query: string): void,
	_resetData(): void,
	getData(): any
}

export interface OverPassLayerOptions {
	debug: boolean,
	minZoom: number,
	endpoint: string,
	query: string,
	loadedBounds: Leaflet.latlngBounds, // could be also LatLngBoundsLiteral
	markerIcon: string|null,
	timeout: number,
	retryOnTimeout: boolean,
	noInitialRequest: boolean,
  beforeRequest(): void,
  afterRequest(): void,
  /**
   * @todo define data
   */
  onSuccess(data: any): void,
  onError(): void,
  onTimeout(): void,
  minZoomIndicatorEnabled: boolean,
  minZoomIndicatorOptions: { minZoomMessageNoLayer: string, minZoomMessage: string }
}