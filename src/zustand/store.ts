import create from 'zustand';
import { devtools } from 'zustand/middleware';
import {
  Applet,
  Applets,
  GeoGebraElement,
  GeoGebraStore,
  StoreMethods,
} from '../types/store';
import { immer } from './immer';

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
  addElement: ({ id, element }): StoreMethods['addElement'] =>
    set(state => {
      (state.applets as Applets).get(id)?.elements.set(element.label, element);
    }),
  updateElement: ({ id, element }): StoreMethods['updateElement'] =>
    set(state => {
      (state.applets as Applets).get(id)?.elements.set(element.label, element);
    }),
  removeElement: ({ id, label }): StoreMethods['removeElement'] =>
    set(state => {
      (state.applets as Applets).get(id)?.elements.delete(label);
    }),
  updateView2D: ({ id, view }): StoreMethods['updateView2D'] =>
    set(state => {
      (state.applets as Applets).get(id)?.views2D.set(view.viewNo, view);
    }),
});

export const useStore = create<GeoGebraStore>()(
  devtools(immer(store), {
    serialize: {
      options: {
        map: true,
      },
    } as any,
  })
);
