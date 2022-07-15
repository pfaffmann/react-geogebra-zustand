import { GeoGebraView2D, StoreMethods } from '../types/store';
import { Applet, GeoGebraElement } from '../types/store';
import { throttle } from 'throttle-debounce';

export const evalXML = () => {};

const addListener = (app: Applet, storeMethods: StoreMethods) => (
  label: string
) => {
  const { id, api } = app;
  const { addElement } = storeMethods;
  const element: GeoGebraElement = { label, xml: api.getXML(label) };
  addElement({ id, element });
  //console.log(label + ' is added');
  //console.log(api.getXML(label));
  //console.log(api.getCommandString(label));
};
const updateListener = (app: Applet, storeMethods: StoreMethods) => (
  label: string
) => {
  const { id, api } = app;
  const { updateElement } = storeMethods;
  const element: GeoGebraElement = { label, xml: api.getXML(label) };
  updateElement({ id, element });
};
const removeListener = (app: Applet, storeMethods: StoreMethods) => (
  label: string
) => {
  const { id } = app;
  const { removeElement } = storeMethods;
  removeElement({ id, label });
};

const clientListener = (app: Applet, storeMethods: StoreMethods) => (
  event: any
) => {
  const { id, api } = app;
  const { updateView2D } = storeMethods;
  const [eventName, eventInfo1, eventInfo2] = event;
  switch (eventName) {
    case 'updateStyle':
      var label = eventInfo1;
      console.log(label + ' has changed style');

      const xml = api.getXML(label);
      console.log(xml);

      //evalXML(xapi2, xml);
      break;

    case 'setMode':
      console.log('setMode(' + eventInfo2 + ')');
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
      var hits = '';
      for (var i = 0; i < event.hits.length; i++) {
        hits += event.hits[i];
        hits += ' ';
      }
      if (!hits) {
        hits = '(none)';
      }
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
      const props = JSON.parse(api.getViewProperties());
      //console.log(app);

      const xmlP = api.getPerspectiveXML();
      console.log(xmlP);

      if (!event.viewNo || !props || true) break;
      console.log('viewChanged2D', event);
      console.log(props);
      //console.log(props1);
      //const props = JSON.parse(api.getViewProperties(event.viewNo));
      const xMax = props.xMin + props.width * props.invXscale;
      const yMax = props.yMin + props.height * props.invYscale;

      const view: GeoGebraView2D = {
        viewNo: event.viewNo,
        scale: event.scale,
        xZero: event.xZero,
        yZero: event.yZero,
        yscale: event.yscale,
        invXscale: props.invXscale,
        invYscale: 1,
        xMin: props.xMin,
        yMin: props.yMin,
        xMax,
        yMax,
        width: props.width,
        height: props.height,
        left: props.left,
        top: props.top,
      };
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

    default:
      console.error('unhandled event ' + eventName + ' ' + event);
  }
};

export const unregisterListeners = (app: Applet) => {
  const { api } = app;
  api.unregisterAddListener(addListener);
  api.unregisterUpdateListener(throttle(2500, updateListener));
  api.unregisterRemoveListener(removeListener);
  api.unregisterClientListener(throttle(250, clientListener));
};

export const registerListeners = (app: Applet, storeMethods: StoreMethods) => {
  const { api } = app;
  api.registerUpdateListener(updateListener(app, storeMethods));
  api.registerRemoveListener(removeListener(app, storeMethods));
  api.registerAddListener(addListener(app, storeMethods));
  api.registerClientListener(clientListener(app, storeMethods));
};
