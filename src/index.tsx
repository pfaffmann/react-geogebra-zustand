import { GeoGebraScriptInjector as Injector } from './components/GeoGebraScriptInjector';
import GGB from './components/GeoGebra';
import { useStore as useGeoGebraStore } from './zustand/store';
import { immer as immerMiddleware } from './zustand/immer';
export * from './types/index';
export * from './types/store';

export const GeoGebraScriptInjector = Injector;
export const GeoGebra = GGB;
export const useStore = useGeoGebraStore;
export const immer = immerMiddleware;
