import { GeoGebraScriptInjector as Injector } from './components/GeoGebraScriptInjector';
import GGB from './components/GeoGebra';
import { useStore as useGeoGebraStore } from './zustand/store';

export const GeoGebraScriptInjector = Injector;
export const GeoGebra = GGB;
export const useStore = useGeoGebraStore;
