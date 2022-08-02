import * as React from 'react';
import { ReactGeoGebraParameters } from '../types';
import { useStore } from '../zustand/store';
import { nanoid } from 'nanoid';
import { registerListeners } from '../util';
import { Applet, StoreMethods } from '../types/store';
import { throttle } from 'throttle-debounce';

const Geogebra: React.FC<ReactGeoGebraParameters> = props => {
  const isScriptLoaded = useStore(state => state.isScriptLoaded);
  const applets = useStore(state => state.applets);
  const addApplet = useStore(state => state.addApplet);
  const {
    addElement,
    updateElement,
    removeElement,
    updateView2D,
    updateMouse,
    updateMode,
    renameElement,
    setLog,
  } = useStore();
  let { id, appletOnLoad, width, height, onLog, ...rest } = props;
  const [memorizedId] = React.useState(`${id}-${nanoid(8)}`);
  id = memorizedId;
  const params = {
    id,
    appletOnLoad: (api: any) => {
      const applet: Applet = {
        id: memorizedId,
        api,
        elements: {},
        views2D: {},
        log: onLog ? onLog : console.log,
        mouse: { viewNo: 0, viewName: '', x: 0, y: 0, hits: [] },
        mode: { number: -1, name: '' },
      };

      addApplet(applet);
      registerListeners(applet, {
        addElement,
        updateElement,
        removeElement,
        renameElement,
        updateView2D: throttle(
          50,
          updateView2D
        ) as StoreMethods['updateView2D'],
        updateMouse,
        updateMode,
        setLog,
      });
      if (appletOnLoad) appletOnLoad(api);
    },
    width,
    height,
    ...rest,
  };

  React.useEffect(() => {
    if (!width || !height) return;
    const applet = applets[memorizedId];
    if (typeof applet === 'undefined') return;
    console.log(applets);

    applet.api.setSize(width, height);
  }, [width, height]);

  React.useEffect(() => {
    if (!isScriptLoaded) return;
    if (typeof (window as any).GGBApplet === 'undefined') return;
    const views = {
      is3D: 0,
      AV: 1,
      SV: 0,
      CV: 0,
      EV2: 0,
      CP: 0,
      PC: 0,
      DA: 0,
      FI: 0,
      macro: 0,
    };
    var applet = new (window as any).GGBApplet(params, '5.0', views);
    var cb: string | null;
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('cb')) {
      cb = urlParams.get('cb');
      applet.setHTML5Codebase(
        'https://apps-builds.s3-eu-central-1.amazonaws.com/geogebra/branches/' +
          cb +
          '/web3d'
      );
    }
    applet.inject(params.id);
  }, [isScriptLoaded, props]);

  return <div id={params.id}></div>;
};

Geogebra.defaultProps = {
  id: 'ggbApplet',
  width: 800,
  height: 400,
  showMenuBar: true,
  showAlgebraInput: true,
  showToolBar: true,
  customToolBar:
    '0 39 73 62 | 1 501 67 , 5 19 , 72 75 76 | 2 15 45 , 18 65 , 7 37 | 4 3 8 9 , 13 44 , 58 , 47 | 16 51 64 , 70 | 10 34 53 11 , 24  20 22 , 21 23 | 55 56 57 , 12 | 36 46 , 38 49  50 , 71  14  68 | 30 29 54 32 31 33 | 25 17 26 60 52 61 | 40 41 42 , 27 28 35 , 6',
  showToolBarHelp: false,
  showResetIcon: false,
  enableLabelDrags: false,
  enableShiftDragZoom: true,
  enableRightClick: false,
  errorDialogsActive: false,
  useBrowserForJS: true,
  allowStyleBar: false,
  preventFocus: false,
  showZoomButtons: true,
  capturingThreshold: 3,
  // add code here to run when the applet starts
  appletOnLoad: (_: any) => {},
  showFullscreenButton: true,
  scale: 1,
  disableAutoScale: false,
  allowUpscale: false,
  clickToLoad: false,
  appName: 'classic',
  showSuggestionButtons: true,
  buttonRounding: 0.7,
  buttonShadows: false,
  language: 'de',
  // use this instead of ggbBase64 to load a material from geogebra.org
  // "material_id":"RHYH3UQ8",
  // use this instead of ggbBase64 to load a .ggb file
  // "filename":"myfile.ggb",
  //ggbBase64:
  //  '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',
};

export default Geogebra;
