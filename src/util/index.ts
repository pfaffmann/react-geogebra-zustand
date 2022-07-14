import { GeoGebraStore, StoreMethods, useStore } from '../zustand/store';
import { Applet, GeoGebraElement } from '../types/store';
export const evalXML = () => {};

export const registerListeners = (app: Applet, storeMethods: StoreMethods) => {
  const { id, api } = app;
  const { addElement, updateElement, removeElement } = storeMethods;
  api.registerUpdateListener((label: string) => {
    const element: GeoGebraElement = { label, xml: api.getXML(label) };
    updateElement({ id, element });
    //console.log(label + ' is updated');
  });
  api.registerRemoveListener((label: string) => {
    removeElement({ id, label });
    //console.log(label + ' is removed');
  });
  api.registerAddListener((label: string) => {
    const element: GeoGebraElement = { label, xml: api.getXML(label) };
    addElement({ id, element });
    //console.log(label + ' is added');
    //console.log(api.getXML(label));
    //console.log(api.getCommandString(label));
  });
  api.registerClientListener((event: any) => {
    const [eventName, eventInfo1, eventInfo2] = event;
    switch (eventName) {
      case 'updateStyle':
        var label = eventInfo1;
        console.log(label + ' has changed style');

        var xml = api.getXML(label);
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

      case 'viewChanged2D':
        console.log('viewChanged2D', event);
        var props = JSON.parse(String(api.getViewProperties()));
        var xMin = props.xMin;
        var yMin = props.yMin;
        var xMax = props.xMin + props.width * props.invXscale;
        var yMax = props.yMin + props.height * props.invYscale;
        console.log(xMin, yMin, xMax, yMax);

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
          'dropdownClosed, label = ' +
            event.argument +
            ' index = ' +
            event.index
        );
        break;

      default:
        console.error('unhandled event ' + eventName + ' ' + event);
    }
  });
};
export const unregisterListeners = () => {};
