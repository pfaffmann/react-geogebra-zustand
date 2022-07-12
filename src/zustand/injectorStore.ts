import create from 'zustand';
import { devtools } from 'zustand/middleware';
export interface InjectorState {
  isScriptLoaded: boolean;
  setScriptLoaded: (isLoaded: boolean) => void;
}

export const useInjectorStore = create(
  devtools<InjectorState>(set => ({
    isScriptLoaded: false,
    setScriptLoaded: (isLoaded: boolean) =>
      set(() => ({ isScriptLoaded: isLoaded })),
  }))
);
