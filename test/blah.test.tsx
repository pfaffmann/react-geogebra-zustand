import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GeoGebra, GeoGebraScriptInjector } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <>
        <GeoGebraScriptInjector />
        <GeoGebra id="app" />
      </>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
