import { GeoGebraAPI as API } from '.';

export type GeoGebraElement = {
  label: string;
  xml: string;
};

export type Applet = {
  id: string;
  api: API;
  elements: Map<string, GeoGebraElement>;
};
export type Applets = Map<string, Applet>;
