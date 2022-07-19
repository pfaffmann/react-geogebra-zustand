import { GeoGebraAPI as API } from '.';

export type GeoGebraElement = {
  label: string;
  xml: string;
};

export type GeoGebraView2D = {
  viewNo: number;
  viewName: string;
  scale: number;
  xZero: number;
  yZero: number;
  yscale: number;
  invXscale?: number;
  invYscale?: number;
  xMin?: number;
  yMin?: number;
  xMax?: number;
  yMax?: number;
  width?: number;
  height?: number;
  left?: number;
  top?: number;
};

export type GeoGebraMode = {
  number: number;
  name: string;
};

export type GeoGebraMouse = {
  viewNo: number; //1 Graphics 1; 2 Graphics 2; 512 Graphics 3D
  viewName: string;
  x: number;
  y: number;
  hits: Array<string>;
};

export type Applet = {
  id: string;
  api: API;
  elements: { [key: string]: GeoGebraElement };
  views2D: { [key: string]: GeoGebraView2D };
  mouse: GeoGebraMouse;
  mode: GeoGebraMode;
};
export type Applets = { [key: string]: Applet };

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
  updateMouse: ({ id, mouse }: { id: string; mouse: GeoGebraMouse }) => void;
  updateMode: ({ id, mode }: { id: string; mode: GeoGebraMode }) => void;
}

export type GeoGebraStore = {
  isScriptLoaded: boolean;
  setScriptLoaded: (isLoaded: boolean) => void;
  applets: Applets;
  addApplet: (applet: Applet) => void;
} & StoreMethods;
