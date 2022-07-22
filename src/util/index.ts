import { Applet, StoreMethods } from '../types/store';
import {
  GeoGebraElement,
  GeoGebraMouse,
  GeoGebraView2D,
  XYZPosition,
} from '../types';
import { modeMap } from '../constants/mode';
import { viewNamesMap, viewNoToViewXMLNo } from '../constants/view';
import { throttle } from 'throttle-debounce';

export const geogebraElementFromApi = (label: string, api: Applet['api']) => {
  const objectType = api.getObjectType(label);
  let coordinates;
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
    coordinates: Object.keys(coordinates).includes('x')
      ? coordinates
      : undefined,
    value: api.getValue(label),
    color: api.getColor(label),
    isVisible: api.getVisible(label),
    valueString: encodeURI(api.getValueString(label)),
    definitionString: encodeURI(api.getDefinitionString(label)),
    commandString: encodeURI(api.getCommandString(label)),
    LaTeXString: encodeURI(api.getLaTeXString(label)),
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

const addListener = (app: Applet, storeMethods: StoreMethods) => (
  label: string
) => {
  if (!label) return;
  const { id, api } = app;
  const { addElement } = storeMethods;
  const element = geogebraElementFromApi(label, api);
  addElement({ id, element });
  console.log(label + ' is added');
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
  const { id } = app;
  const { renameElement, removeElement } = storeMethods;
  console.log('old: ' + oldLabel + ' new: ' + newLabel);

  renameElement({ id, oldLabel, newLabel });
  removeElement({ id, label: oldLabel });
};

const clientListener = (app: Applet, storeMethods: StoreMethods) => (
  event: any
) => {
  const { id, api } = app;
  const { updateView2D, updateMouse, updateMode, updateElement } = storeMethods;
  const [eventName, eventInfo1, eventInfo2] = event;
  switch (eventName) {
    case 'updateStyle':
      const label = eventInfo1;
      const element = geogebraElementFromApi(label, api);
      console.log(element.label + ' has changed style');
      updateElement({ id, element });

      //evalXML(xapi2, xml);
      break;

    case 'setMode':
      const mode = {
        number: eventInfo2,
        name: modeMap.get(parseInt(eventInfo2)) || '',
      };
      updateMode({ id, mode });
      console.log('setMode(' + mode.number + ') = ' + mode.name);
      //xapi2.setMode(eventInfo2);
      break;

    case 'deselect':
      console.log('deselect', event);
      //unregisterListeners();
      //xapi2.evalCommand('SelectObjects[]');
      //registerListeners();
      break;
    case 'select':
      console.log('select', event);
      //unregisterListeners();
      //xapi2.evalCommand("SelectObjects[" + eventInfo1 + "]");
      //registerListeners();
      break;

    case 'mouseDown':
      console.log('Mouse down');
      var hits =
        (event.hits as Array<string>).length > 0
          ? (event.hits as Array<string>).join(' ')
          : '(none)';
      console.log(
        eventName +
          ' in view ' +
          event.viewNo +
          ' at (' +
          event.x +
          ', ' +
          event.y +
          ') hitting objects: ' +
          hits
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
      console.log('****** POLYGON START ******');
      break;
    case 'addPolygonComplete':
      console.log('****** POLYGON ' + eventName + ' FINISHED ******');
      break;

    case 'viewPropertiesChanged':
      console.log('viewPropertiesChanged', event);
      break;

    case 'viewChanged2D':
      console.log('viewChanged2D', event);
      const view: GeoGebraView2D = {
        viewNo: event.viewNo,
        viewName:
          viewNamesMap.get(viewNoToViewXMLNo(parseInt(event.viewNo))) || '',
        scale: event.scale,
        xZero: event.xZero,
        yZero: event.yZero,
        yscale: event.yscale,
      };
      if (parseInt(event.viewNo) <= 1) {
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
      }
      updateView2D({ id, view });
      //console.log(view);
      //xapi2.setCoordSystem(xMin, xMax, yMin, yMax);
      break;

    case 'dragEnd':
      console.log('dragEnd', eventInfo1);
      break;

    case 'showStyleBar':
      console.log('showStyleBar');
      break;

    case 'editorStart':
      console.log('editorStart');
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
  api.registerUpdateListener(throttle(500, updateListener(app, storeMethods)));
  api.registerRemoveListener(removeListener(app, storeMethods));
  api.registerRenameListener(renameListener(app, storeMethods));
  api.registerAddListener(addListener(app, storeMethods));
  api.registerClientListener(clientListener(app, storeMethods));
};
