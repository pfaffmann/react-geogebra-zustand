import { Applet, StoreMethods } from '../types/store';
import {
  GeoGebraElement,
  GeoGebraMouse,
  GeoGebraView2D,
  GeoGebraView3D,
  XYZPosition,
} from '../types';
import { modeMap } from '../constants/mode';
import { viewNamesMap, viewNoToViewXMLNo } from '../constants/view';

export const geogebraElementFromApi = (label: string, api: Applet['api']) => {
  const objectType = api.getObjectType(label);
  let coordinates: XYZPosition | undefined = undefined;
  switch (objectType) {
    case 'point':
      coordinates = {
        x: api.getXcoord(label),
        y: api.getYcoord(label),
        z: api.getZcoord(label),
      };
      break;

    default:
      break;
  }

  const element: GeoGebraElement = {
    label,
    coordinates,
    value: api.getValue(label),
    color: api.getColor(label),
    isVisible: api.getVisible(label),
    valueString: api.getValueString(label),
    definitionString: api.getDefinitionString(label),
    commandString: api.getCommandString(label),
    LaTeXString: api.getLaTeXString(label),
    objectType,
    isExisting: api.exists(label),
    isDefined: api.isDefined(label),
    layer: api.getLayer(label),
    lineStyle: api.getLineStyle(label),
    lineThickness: api.getLineThickness(label),
    pointStyle: api.getPointStyle(label),
    pointSize: api.getPointSize(label),
    filling: api.getFilling(label),
    caption: api.getCaption(label),
    labelStyle: api.getLabelStyle(label),
    isLabelVisible: api.getLabelVisible(label),
    isIndependent: api.isIndependent(label),
    isMoveable: api.isMoveable(label),
    xml: api.getXML(label),
  };

  return element;
};

export const initializeElements = (
  app: Applet,
  addElement: StoreMethods['addElement']
) => {
  const { id, api } = app;
  const labels = api.getAllObjectNames();

  labels.map(label => {
    const element = geogebraElementFromApi(label, api);
    addElement({ id, element });
  });
};

const addListener = (app: Applet, storeMethods: StoreMethods) => (
  label: string
) => {
  if (!label) return;
  const { id, api, log } = app;
  const { addElement } = storeMethods;
  const element = geogebraElementFromApi(label, api);
  addElement({ id, element });
  log(label + ' is added');
  //console.log(api.getXML(label));
  //console.log(api.getCommandString(label));
};
const updateListener = (app: Applet, storeMethods: StoreMethods) => (
  label: string
) => {
  const { id, api } = app;
  const { updateElement } = storeMethods;
  const element = geogebraElementFromApi(label, api);
  updateElement({ id, element });
};
const removeListener = (app: Applet, storeMethods: StoreMethods) => (
  label: string
) => {
  const { id } = app;
  const { removeElement } = storeMethods;
  removeElement({ id, label });
};

const renameListener = (app: Applet, storeMethods: StoreMethods) => (
  oldLabel: string,
  newLabel: string
) => {
  const { id, log } = app;
  const { renameElement } = storeMethods;
  log('old: ' + oldLabel + ' new: ' + newLabel);

  renameElement({ id, oldLabel, newLabel });
};

const clientListener = (app: Applet, storeMethods: StoreMethods) => (
  event: any
) => {
  const { id, api, log } = app;
  const {
    updateView2D,
    updateView3D,
    updateMouse,
    updateMode,
    updateElement,
    updateSelectedElements,
    getSelectedElements,
    getElement,
  } = storeMethods;
  const [eventName, eventInfo1, eventInfo2] = event;
  switch (eventName) {
    case 'updateStyle':
      const label = eventInfo1;
      const element = geogebraElementFromApi(label, api);
      log(element.label + ' has changed style');
      updateElement({ id, element });

      //evalXML(xapi2, xml);
      break;

    case 'setMode':
      const mode = {
        number: eventInfo2,
        name: modeMap.get(parseInt(eventInfo2)) || '',
      };
      updateMode({ id, mode });
      log('setMode(' + mode.number + ') = ' + mode.name);
      //xapi2.setMode(eventInfo2);
      break;

    case 'deselect':
      log('deselect ' + JSON.stringify(event));
      //unregisterListeners();
      //xapi2.evalCommand('SelectObjects[]');
      //registerListeners();
      updateSelectedElements({ id, selectedElements: [] });
      break;
    case 'select':
      log('select ' + JSON.stringify(event));
      const elementLabel = eventInfo1;
      const selectedElements = getSelectedElements({ id });
      const selectedElement = getElement({ id, label: elementLabel }); //geogebraElementFromApi(elementLabel, api);
      updateSelectedElements({
        id,
        selectedElements: [...selectedElements, selectedElement],
      });

      //unregisterListeners();
      //xapi2.evalCommand("SelectObjects[" + eventInfo1 + "]");
      //registerListeners();

      break;

    case 'mouseDown':
      //log('Mouse down');
      var hits =
        (event.hits as Array<string>).length > 0
          ? (event.hits as Array<string>).join(' ')
          : '(none)';
      log(
        `${eventName} in view ${viewNamesMap.get(parseInt(event.viewNo))} at (${
          event.x
        },${event.y}${event.z ? ', ' + event.z : ''}) hitting objects: ${hits}`
      );
      const mouse: GeoGebraMouse = {
        viewNo: event.viewNo,
        viewName:
          viewNamesMap.get(viewNoToViewXMLNo(parseInt(event.viewNo))) || '',
        x: event.x,
        y: event.y,
        hits: event.hits,
      };
      updateMouse({ id, mouse });
      break;
    case 'addPolygon':
      log('****** POLYGON START ******');
      break;
    case 'addPolygonComplete':
      log('****** POLYGON ' + eventName + ' FINISHED ******');
      break;

    case 'viewPropertiesChanged':
      log('viewPropertiesChanged ' + JSON.stringify(event));
      break;

    case 'viewChanged2D':
      //log('viewChanged2D ' + JSON.stringify(event));
      const view: GeoGebraView2D = {
        viewNo: event.viewNo,
        viewName:
          viewNamesMap.get(viewNoToViewXMLNo(parseInt(event.viewNo))) || '',
        scale: event.scale,
        xZero: event.xZero,
        yZero: event.yZero,
        yscale: event.yscale,
      };

      const props = JSON.parse(api.getViewProperties(event.viewNo));

      const xMax = props.xMin + props.width * props.invXscale;
      const yMax = props.yMin + props.height * props.invYscale;

      view.invXscale = props.invXscale;
      view.invYscale = props.invYscale;
      view.xMin = props.xMin;
      view.yMin = props.yMin;
      view.xMax = xMax;
      view.yMax = yMax;
      view.width = props.width;
      view.height = props.height;
      view.left = props.left;
      view.top = props.top;

      updateView2D({ id, view });

      log(
        `xMin: ${view.xMin?.toFixed(2)}, xMax: ${view.xMax?.toFixed(
          2
        )}, yMin: ${view.yMin?.toFixed(2)}, yMax: ${view.yMax?.toFixed(
          2
        )}, scale: ${view.scale?.toFixed(2)}`
      );
      //xapi2.setCoordSystem(xMin, xMax, yMin, yMax);
      break;

    case 'viewChanged3D':
      const view3D: GeoGebraView3D = {
        viewNo: event.viewNo,
        viewName:
          viewNamesMap.get(viewNoToViewXMLNo(parseInt(event.viewNo))) || '',
        scale: event.scale,
        xZero: event.xZero,
        yZero: event.yZero,
        zZero: event.zZero,
        yscale: event.yscale,
        zscale: event.zscale,
        xAngle: event.xAngle,
        zAngle: event.zAngle,
      };

      updateView3D({ id, view: view3D });
      break;

    case 'dragEnd':
      log('dragEnd ' + JSON.stringify(eventInfo1));
      break;

    case 'showStyleBar':
      log('showStyleBar');
      break;

    case 'editorStart':
      log('editorStart');
      break;

    case 'editorKeyTyped':
      console.log(event);
      if (event.label) {
        console.log('Event from Input Box', event, event.label);
        // Input Box
        var state = api.getInputBoxState(event.label);
        console.log('State from Input Box: ' + state);
        //xapi2.setInputBoxState(state, event.label);
      } else {
        // Algebra View editor
        var state = api.getEditorState();
        console.log(state, eventInfo1);
        console.log(eventInfo1);
        //console.log(xapi2.getEditorState());
        //xapi2.setEditorState(state);
      }
      break;
    case 'editorStop':
      console.log('editorStop: ' + event);

      //xapi2.setEditorState({ content: '' });
      break;

    case 'perspectiveChange':
      console.log('perspectiveChange');
      break;

    case 'dropdownOpened':
      console.log('dropdownOpened, label =  ' + event.argument);
      break;

    case 'dropdownItemFocused':
      console.log(
        'dropdownItemFocused, label = ' +
          event.argument +
          ' index = ' +
          event.index
      );
      break;

    case 'dropdownClosed':
      console.log(
        'dropdownClosed, label = ' + event.argument + ' index = ' + event.index
      );
      break;

    case 'renameComplete':
      console.log('rename ');
      console.log(event);

      break;

    default:
      console.error('unhandled event ' + eventName + ' ' + event);
  }
};

export const unregisterListeners = (app: Applet) => {
  const { api } = app;
  api.unregisterAddListener(addListener);
  api.unregisterUpdateListener(updateListener);
  api.unregisterRemoveListener(removeListener);
  api.unregisterRenameListener(renameListener);
  api.unregisterClientListener(clientListener);
};

export const registerListeners = (app: Applet, storeMethods: StoreMethods) => {
  const { api } = app;
  api.registerUpdateListener(updateListener(app, storeMethods));
  api.registerRemoveListener(removeListener(app, storeMethods));
  api.registerRenameListener(renameListener(app, storeMethods));
  api.registerAddListener(addListener(app, storeMethods));
  api.registerClientListener(clientListener(app, storeMethods));
};
