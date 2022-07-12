import 'react-app-polyfill/ie11';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { GeoGebraScriptInjector, GeoGebra } from '../.';

const App = () => {
  const [width, setWidth] = React.useState(800);
  const [height, setHeight] = React.useState(400);
  return (
    <div>
      <GeoGebraScriptInjector />
      <GeoGebra id="app1" width={width} height={height} />
      <GeoGebra id="app2" />
      <button onClick={() => setWidth(width + 10)}>Change Props</button>
      <button onClick={() => setHeight(height + 10)}>Change Props</button>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
