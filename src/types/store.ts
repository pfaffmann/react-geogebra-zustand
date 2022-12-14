import {
  GeoGebraAPI as API,
  GeoGebraMode,
  GeoGebraMouse,
  GeoGebraView2D,
} from '.';
import { GeoGebraElement } from '.';

export type Applet = {
  id: string;
  api: API;
  elements: { [key: string]: GeoGebraElement };
  selectedElements: GeoGebraElement[];
  views2D: { [key: string]: GeoGebraView2D };
  mouse: GeoGebraMouse;
  mode: GeoGebraMode;
  log: (...data: any[]) => void;
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
  getElement: ({ id, label }: { id: string; label: string }) => GeoGebraElement;
  updateElement: ({
    id,
    element,
  }: {
    id: string;
    element: GeoGebraElement;
  }) => void;
  removeElement: ({ id, label }: { id: string; label: string }) => void;
  renameElement: ({
    id,
    oldLabel,
    newLabel,
  }: {
    id: string;
    oldLabel: string;
    newLabel: string;
  }) => void;
  updateView2D: ({ id, view }: { id: string; view: GeoGebraView2D }) => void;
  updateMouse: ({ id, mouse }: { id: string; mouse: GeoGebraMouse }) => void;
  updateMode: ({ id, mode }: { id: string; mode: GeoGebraMode }) => void;
  updateSelectedElements: ({
    id,
    selectedElements,
  }: {
    id: string;
    selectedElements: Applet['selectedElements'];
  }) => void;
  getSelectedElements: ({ id }: { id: string }) => Applet['selectedElements'];
}

export type GeoGebraStore = {
  isScriptLoaded: boolean;
  setScriptLoaded: (isLoaded: boolean) => void;
  applets: Applets;
  getApplet: (id: string) => Partial<Applet>;
  addApplet: (applet: Applet) => void;
} & StoreMethods;
