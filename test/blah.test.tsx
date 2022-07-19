import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GeoGebra } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GeoGebra id="app" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
