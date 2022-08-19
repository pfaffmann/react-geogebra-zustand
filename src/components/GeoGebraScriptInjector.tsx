import * as React from 'react';
import { GGBApplet } from '../types';
import { useStore } from '../zustand/store';

export interface InjectorProps {
  scriptSource?: string;
  onStartup?: () => void;
  onLoad?: () => void;
  onError?: (error: any) => void;
  children?: React.ReactNode;
}

export const GeoGebraScriptInjector: React.FC<InjectorProps> = ({
  scriptSource = 'https://www.geogebra.org/apps/deployggb.js',
  onStartup,
  onLoad,
  onError,
  children,
}) => {
  let deployPromise: Promise<GGBApplet> | undefined = undefined;
  const setScriptLoaded = useStore(state => state.setScriptLoaded);
  React.useEffect(() => {
    const deployScriptInjector = <T,>(
      res: (geoGebra: T) => void,
      rej: (error: ErrorEvent) => void
    ) => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = scriptSource;
      script.async = false;

      script.addEventListener(
        'load',
        () => {
          const geoGebra = (window as any).GGBApplet;
          if (onStartup) onStartup();
          res(geoGebra);
          setScriptLoaded(true);
          if (onLoad) onLoad();
        },
        { once: true }
      );
      script.addEventListener('error', e => rej(e));
      document.getElementsByTagName('head')[0].appendChild(script);
    };

    if (typeof deployPromise === 'undefined') {
      if (typeof window !== 'undefined') {
        deployPromise = new Promise<GGBApplet>(deployScriptInjector);
        deployPromise.catch(e => {
          if (onError) onError(e);
          else
            throw Error(
              `Failed to download deployggb from '${scriptSource}' due to: ${e}`
            );
        });
      } else {
        // for server side rendering
        deployPromise = Promise.reject();
        deployPromise.catch(_ => undefined);
      }
    }
  }, []);

  return <>{children ? children : null}</>;
};
