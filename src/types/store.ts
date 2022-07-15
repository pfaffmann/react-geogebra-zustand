import { GeoGebraAPI as API } from '.';

export type GeoGebraElement = {
  label: string;
  xml: string;
};

export type GeoGebraView2D = {
  viewNo: number;
  scale: number;
  xZero: number;
  yZero: number;
  yscale: number;
  invXscale: number;
  invYscale: number;
  xMin: number;
  yMin: number;
  xMax: number;
  yMax: number;
  width: number;
  height: number;
  left: number;
  top: number;
};

export type Applet = {
  id: string;
  api: API;
  elements: Map<string, GeoGebraElement>;
  views2D: Map<number, GeoGebraView2D>;
};
export type Applets = Map<string, Applet>;

export interface StoreMethods {
  addElement: ({
    id,
    element,
  }: {
    id: string;
    element: GeoGebraElement;
  }) => void;
  updateElement: ({
    id,
    element,
  }: {
    id: string;
    element: GeoGebraElement;
  }) => void;
  removeElement: ({ id, label }: { id: string; label: string }) => void;
  updateView2D: ({ id, view }: { id: string; view: GeoGebraView2D }) => void;
}

export type GeoGebraStore = {
  isScriptLoaded: boolean;
  setScriptLoaded: (isLoaded: boolean) => void;
  applets: Applets;
  addApplet: (applet: Applet) => void;
} & StoreMethods;
