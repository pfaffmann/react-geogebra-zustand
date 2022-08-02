import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { Applet, GeoGebraStore, StoreMethods } from '../types/store';
import { immer } from './immer';

const store = (set, get) => ({
  isScriptLoaded: false,
  setScriptLoaded: (isLoaded: boolean) =>
    set(state => {
      state.isScriptLoaded = isLoaded;
    }),
  applets: {},
  log: () => {},
  setLogFunction: (func: () => void) =>
    set(state => {
      state.log = func;
    }),

  getApplet: (id: string) =>
    Object.fromEntries(
      Object.entries(get().applets[id]).filter(
        ([key, value]) => !['api', 'mouse'].includes(key)
      )
    ),
  addApplet: (applet: Applet) =>
    set(state => {
      state.applets[applet.id] = applet;
    }),
  addElement: ({ id, element }): StoreMethods['addElement'] =>
    set(state => {
      state.applets[id].elements[element.label] = element;
    }),
  updateElement: ({ id, element }): StoreMethods['updateElement'] =>
    set(state => {
      state.applets[id].elements[element.label] = element;
    }),
  removeElement: ({ id, label }): StoreMethods['removeElement'] =>
    set(state => {
      delete state.applets[id].elements[label];
    }),
  renameElement: ({ id, oldLabel, newLabel }): StoreMethods['renameElement'] =>
    set(state => {
      state.applets[id].elements[newLabel] =
        state.applets[id].elements[oldLabel];
      delete state.applets[id].elements[oldLabel];
    }),
  updateView2D: ({ id, view }): StoreMethods['updateView2D'] =>
    set(state => {
      state.applets[id].views2D[view.viewNo] = view;
    }),
  updateMouse: ({ id, mouse }): StoreMethods['updateMouse'] =>
    set(state => {
      state.applets[id].mouse = mouse;
    }),
  updateMode: ({ id, mode }): StoreMethods['updateMode'] =>
    set(state => {
      state.applets[id].mode = mode;
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
