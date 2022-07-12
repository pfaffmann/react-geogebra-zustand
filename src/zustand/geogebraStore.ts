import create from 'zustand';
import { devtools } from 'zustand/middleware';
export interface GeoGebraState {
  applets: Array<{ id: string; api: any }>;
  addApplet: ({ id: string, api: any }) => void;
}

export const useGeoGebraStore = create(
  devtools<GeoGebraState>(set => ({
    applets: [],
    addApplet: applet =>
      set(state => ({ applets: [...state.applets, applet] })),
  }))
);
