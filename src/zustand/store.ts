import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { Applet, Applets, GeoGebraElement } from '../types/store';
import { immer } from './immer';

export type StoreMethods = {
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
};

export type GeoGebraStore = {
  isScriptLoaded: boolean;
  setScriptLoaded: (isLoaded: boolean) => void;
  applets: Applets;
  addApplet: (applet: Applet) => void;
} & StoreMethods;

const store = set => ({
  isScriptLoaded: false,
  setScriptLoaded: (isLoaded: boolean) =>
    set(state => {
      state.isScriptLoaded = isLoaded;
    }),
  applets: new Map<string, Applet>(),
  addApplet: (applet: Applet) =>
    set(state => {
      (state.applets as Applets).set(applet.id, applet);
    }),
  addElement: ({ id, element }: { id: string; element: GeoGebraElement }) =>
    set(state => {
      (state.applets as Applets).get(id)?.elements.set(element.label, element);
    }),
  updateElement: ({ id, element }: { id: string; element: GeoGebraElement }) =>
    set(state => {
      (state.applets as Applets).get(id)?.elements.set(element.label, element);
    }),
  removeElement: ({ id, label }: { id: string; label: string }) =>
    set(state => {
      (state.applets as Applets).get(id)?.elements.delete(label);
    }),
});

export const useStore = create(
  devtools<GeoGebraStore>(immer(store), {
    serialize: {
      options: {
        map: true,
      },
    } as any,
  })
);
