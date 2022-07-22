import * as React from 'react';

export interface XYPosition {
  x: number;
  y: number;
}
export interface XYZPosition {
  x: number;
  y: number;
  z: number;
}

export type LabelStyle = 0 | 1 | 2 | 3;
export type PointSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type GeoGebraElement = {
  label: string;
  xml: string;
  coordinates?: XYPosition | XYZPosition;
  value?: number;
  listValue?: number;
  color?: string;
  isVisible?: boolean;
  valueString?: string;
  definitionString?: string;
  commandString?: string;
  LaTeXString?: string;
  LaTeXBase64Definition?: string;
  LaTeXBase64Value?: string;
  objectType?: string;
  isExisting?: boolean;
  isDefined?: boolean;
  objectNumber?: number;
  CASobjectNumber?: number;
  layer?: number;
  lineStyle?: number;
  lineThickness?: number;
  pointStyle?: number;
  pointSize?: PointSize;
  filling?: number;
  caption?: string;
  labelStyle?: LabelStyle;
  isLabelVisible?: boolean;
  isIndependent?: boolean;
  isMoveable?: boolean;
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

export type GGBApplet = any;

export interface AppParameters {
  id: string;
  appletOnLoad?: (_: any) => void;
  appName?: string;
  width?: number;
  height?: number;
  material_id?: string;
  filename?: string;
  ggbBase64?: string;
  borderColor?: string;
  enableRightClick?: boolean;
  enableLabelDrags?: boolean;
  enableShiftDragZoom?: boolean;
  showZoomButtons?: boolean;
  errorDialogsActive?: boolean;
  showToolBar?: boolean;
  showAlgebraInput?: boolean;
  showMenuBar?: boolean;
  showToolBarHelp?: boolean;
  customToolBar?: string;
  showResetIcon?: boolean;
  language?: string;
  country?: string;
  allowStyleBar?: boolean;
  useBrowserForJS?: boolean;
  showLogging?: boolean;
  capturingThreshold?: number;
  enableFileFeatures?: boolean;
  perspective?: string;
  enable3d?: boolean;
  enableCAS?: boolean;
  algebraInputPosition?: string;
  preventFocus?: boolean;
  scaleContainerClass?: string;
  autoHeight?: boolean;
  allowUpscale?: boolean;
  playButton?: boolean;
  scale?: number;
  disableAutoScale?: boolean;
  allowAutoScale?: boolean;
  clickToLoad?: boolean;
  showAnimationButton?: boolean;
  showFullscreenButton?: boolean;
  showSuggestionButtons?: boolean;
  showStartTooltip?: boolean;
  rounding?: string;
  buttonShadows?: boolean;
  buttonRounding?: number;
  buttonBorderColor?: string;
  editorBackgroundColor?: string;
  editorForegroundColor?: string;
  textmode?: boolean;
  keyboardType?: string;
}

export interface CustomAppParameters {
  debug?: boolean;
  onReady?: () => void;
  LoadComponent?: React.FC;
  isReloadingIfPropChanges?: boolean;
  onLog?: (log: string) => void;
  children?: React.ReactNode;
}

export type ReactGeoGebraParameters = AppParameters & CustomAppParameters;

type Construction = any;
type Kernel = any;
type App = any;
type AlgebraProcessor = any;
type Geometry3DGetter = any;
type AsyncOperation<T> = any;
type Consumer<T> = any;
type ViewProperties = {
  xMin: number;
  yMin: number;
  width: number;
  height: number;
  invXscale: number;
  invYscale: number;
};

export interface GeoGebraAPI {
  getConstruction: () => Construction;
  getKernel: () => Kernel;
  getAlgebraProcessor: () => AlgebraProcessor;
  reset: () => void;
  evalXML: (xmlString: string) => void;
  evalCommandCAS: (cmdString: string, rounding: string) => string;
  evalCommand: (cmdString: string) => boolean;
  evalCommandGetLabels: (cmdString: string) => string;
  debug: (string: string) => void;
  getXML: (objName?: string) => string;
  getStyleXML: (label: string) => string;
  getAlgorithmXML: (objName: string) => string;
  setVisible: (objName: string, visible: boolean) => void;
  getVisible: (objName: string, view?: number) => boolean;
  setLayer: (objName: string, layer: number) => void;
  getLayer: (objName: string) => number;
  setLayerVisible: (layer: number, visible: boolean) => void;
  getAllObjectNames: (type?: string) => string[];
  getSiblingObjectNames: (objName: string) => string[];
  setFixed: (
    objName: string,
    fixed: boolean,
    selectionAllowed?: boolean
  ) => void;

  setTrace: (objName: string, flag: boolean) => void;
  setLabelVisible: (objName: string, visible: boolean) => void;
  getLabelVisible: (objName: string) => boolean;
  setLabelStyle: (objName: string, style: number) => void;
  getLabelStyle: (objName: string) => LabelStyle;
  setColor: (
    objName: string,
    red: number, //x
    green: number, //y
    blue: number //index
  ) => void;
  setCorner: (objName: string, x: number, y: number) => void;
  setAnimating: (objName: string, animate: boolean) => void;
  setAnimationSpeed: (objName: string, speed: number) => void;
  getColor: (objName: string) => string;
  getLineThickness: (objName: string) => number;
  setLineThickness: (objName: string, lineThickness: number) => void;
  getPointStyle: (objName: string) => number;
  setPointStyle: (objName: string, style: number) => void;
  getPointSize: (objName: string) => PointSize;
  setPointSize: (objName: string, style: number) => void;
  getFilling: (objName: string) => number;
  setFilling: (objName: string, filling: number) => void;
  getImageFileName: (objName: string) => string;
  setOnTheFlyPointCreationActive: (flag: boolean) => void;
  setUndoPoint: () => void;
  initCAS: () => void;
  startAnimation: () => void;
  stopAnimation: () => void;
  hideCursorWhenDragging: (hideCursorWhenDragging: boolean) => void;
  isAnimationRunning: () => boolean;
  isAnimating: (label: string) => boolean;
  getFrameRate: () => number;
  registerAddListener: (JSFunctionName: Object) => void;
  unregisterAddListener: (JSFunctionName: Object) => void;
  registerRemoveListener: (JSFunctionName: Object) => void;
  unregisterRemoveListener: (JSFunctionName: Object) => void;
  registerClearListener: (JSFunctionName: Object) => void;
  unregisterClearListener: (JSFunctionName: Object) => void;
  registerRenameListener: (JSFunctionName: Object) => void;
  unregisterRenameListener: (JSFunctionName: Object) => void;
  registerUpdateListener: (JSFunctionName: Object) => void;
  unregisterUpdateListener: (JSFunctionName: Object) => void;
  registerObjectUpdateListener: (
    objName: string,
    JSFunctionName: Object
  ) => void;
  unregisterObjectUpdateListener: (objName: string) => void;
  registerClickListener: (JSFunctionName: Object) => void;
  unregisterClickListener: (JSFunctionName: Object) => void;
  registerClientListener: (JSFunctionName: Object) => void;
  unregisterClientListener: (JSFunctionName: Object) => void;
  registerObjectClickListener: (
    objName: string,
    JSFunctionName: Object
  ) => void;
  unregisterObjectClickListener: (objName: string) => void;
  registerStoreUndoListener: (JSFunctionName: Object) => void;
  unregisterStoreUndoListener: (JSFunctionName: Object) => void;
  isMoveable: (objName: string) => boolean;
  getObjectType: (objName: string) => string;
  setMode: (mode: number) => void;
  getMode: () => number;
  getLineStyle: (objName: string) => number;
  setLineStyle: (objName: string, style: number) => void;
  deleteObject: (objName: string) => void;
  renameObject: (
    oldName: string,
    suggestedName: string,
    forceRename?: boolean
  ) => boolean;
  exists: (objName: string) => boolean;
  isDefined: (objName: string) => boolean;
  isIndependent: (objName: string) => boolean;
  getValueString: (objName: string, localized?: boolean) => string;
  getDefinitionString: (objName: string, localized?: boolean) => string;
  getLaTeXString: (objName: string) => string;
  evalLaTeX: (input: string, mode: number) => void;
  evalMathML: (input: string) => boolean;
  getCommandString: (objName: string, localized?: boolean) => string;
  getCaption: (objName: string, substituteVars?: boolean) => string;
  setCaption: (objName: string, caption: string) => void;
  getPerspectiveXML: () => string;
  getXcoord: (objName: string) => number;
  getYcoord: (objName: string) => number;
  getZcoord: (objName: string) => number;
  setCoords: (objName: string, x: number, y: number, z?: number) => void;
  getValue: (objName: string) => number;
  setValue: (objName: string, x: number) => void;
  setTextValue: (objName: string, x: string) => void;
  setListValue: (objName: string, x: number, y: number) => void;
  setRepaintingActive: (flag: boolean) => void;
  setCoordSystem: (
    xmin: number,
    xmax: number,
    ymin: number,
    ymax: number,
    zmin?: number,
    zmax?: number,
    verticalY?: boolean
  ) => void;
  setAxesVisible: (
    xVisible: boolean,
    yVisible: boolean,
    zVisible?: boolean
  ) => void;
  setAxesCornerCoordsVisible: (showAxesCornerCoords: boolean) => void;
  setGridVisible: (view: number, flag: boolean) => void;
  getSelectedObjectNames: () => string[];
  getObjectNumber: () => number;
  getObjectName: (i: number) => string;
  setXML: (xml: string) => void;
  getApplication: () => App;
  getBase64: (includeThumbnail?: boolean) => string;
  setPenColor: (red: number, green: number, blue: number) => void;
  setPenSize: (size: number) => void;
  getPenSize: () => number;
  getPenColor: () => string;
  getListValue: (objName: string, index: number) => number;
  undo: () => void;
  redo: () => void;
  setSaved: (saved: boolean) => void;
  isSaved: () => boolean;
  newConstruction: () => void;
  getViewProperties: (view?: number) => string;
  setFont: (
    label: string,
    size: number,
    bold: boolean,
    italic: boolean,
    serif: boolean
  ) => void;
  evalGeoGebraCAS: (cmdString: string, debugOutput?: boolean) => string;
  login: (token: string) => void;
  logout: () => void;
  setPerspective: (code: string) => void;
  getGridVisible: (view?: number) => boolean;
  getCASObjectNumber: () => number;
  setLanguage: (localeStr: string) => void;
  setRounding: (rounding: string) => void;
  getRounding: () => string;
  getVersion: () => string;
  updateConstruction: () => void;
  setDisplayStyle: (objName: string, style: string) => void;
  enableCAS: (enable: boolean) => void;
  enable3D: (enable: boolean) => void;
  enableRightClick: (enable: boolean) => void;
  enableLabelDrags: (enable: boolean) => void;
  enableShiftDragZoom: (enable: boolean) => void;
  setAxisSteps: (
    view: number,
    xStep: string,
    yStep: string,
    zStep: string
  ) => void;
  setAxisLabels: (
    view: number,
    xLabel: string,
    yLabel: string,
    zLabel: string
  ) => void;
  getAxisLabels: (view: number) => string[];
  setAxisUnits: (
    view: number,
    xLabel: string,
    yLabel: string,
    zLabel: string
  ) => void;
  getAxisUnits: (view: number) => string[];
  setPointCapture: (view: number, capture: number) => void;
  setAuxiliary: (objName: string, flag: boolean) => void;
  getToolName: (mode: number) => string;
  exportPGF: (handler: AsyncOperation<String>) => void;
  exportPSTricks: (handler: AsyncOperation<String>) => void;
  exportAsymptote: (handler: AsyncOperation<String>) => void;
  copyTextToClipboard: (text: string) => void;
  showTooltip: (text: string) => void;
  isTracing: (objName: string) => boolean;
  exportCollada: (
    xmin: number,
    xmax: number,
    ymin: number,
    ymax: number,
    zmin: number,
    zmax: number,
    xyScale: number,
    xzScale: number,
    xTickDistance: number,
    yTickDistance: number,
    zTickDistance: number
  ) => string;
  exportGeometry3D: (
    getter: Geometry3DGetter,
    xmin: number,
    xmax: number,
    ymin: number,
    ymax: number,
    zmin: number,
    zmax: number,
    xyScale: number,
    xzScale: number,
    xTickDistance: number,
    yTickDistance: number,
    zTickDistance: number
  ) => void;
  exportSimple3d: (
    name: string,
    xmin: number,
    xmax: number,
    ymin: number,
    ymax: number,
    zmin: number,
    zmax: number,
    xyScale: number,
    xzScale: number,
    xTickDistance: number,
    yTickDistance: number,
    zTickDistance: number
  ) => string;
  exportSVG: (filename: string, callback: Consumer<String>) => void;
  exportPDF: (
    exportScale: number,
    filename: string,
    callback: Consumer<String>,
    sliderLabel: string
  ) => void;
  exportGIF: (
    sliderLabel: string,
    scale: number,
    timeBetweenFrames: number,
    isLoop: boolean,
    filename: string,
    rotate: number
  ) => void;
  exportWebM: (
    sliderLabel: string,
    scale: number,
    timeBetweenFrames: number,
    isLoop: boolean,
    filename: string,
    rotate: number
  ) => void;
  exportConstruction: (columnNames: string[]) => string;
  getScreenReaderOutput: (label: string) => string;
  getConstructionSteps: (breakpoints: boolean) => number;
  setConstructionStep: (i: number, breakpoints: boolean) => void;
  previousConstructionStep: () => void;
  nextConstructionStep: () => void;
  writePNGtoFile: (
    filename: string,
    exportScale: number,
    transparent: boolean,
    DPI: number,
    grayscale: boolean
  ) => boolean;
  groupObjects: (objects: string[]) => void;
  ungroupObjects: (objects: string[]) => void;
  getObjectsOfItsGroup: (object: string) => string[];
  getExerciseFraction: () => number;
  enableFpsMeasurement: () => void;
  disableFpsMeasurement: () => void;
  testDraw: () => void;
  startDrawRecording: () => void;
  endDrawRecordingAndLogResults: () => void;
  updateOrdering: (labels: string) => void;
  getOrdering: () => string;
  hasUnlabeledPredecessors: (label: string) => boolean;
  lockTextElement: (label: string) => void;
  unlockTextElement: (label: string) => void;
  isFixed: (label: string) => boolean;
  isSelectionAllowed: (label: string) => boolean;
  setGlobalOptions: (options: Object) => void;
  setGraphicsOptions: (viewId: number, options: Object) => void;
  getGraphicsOptions: (viewId: number) => Object;
  setAlgebraOptions: (options: Object) => void;
  setHeight: (height: number) => void;
  setWidth: (width: number) => void;
  setSize: (width: number, height: number) => void;
  getEditorState: () => string;
  getInputBoxState: (label: string) => string;
}
