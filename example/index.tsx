import * as React from 'react';
import { createRoot } from 'react-dom/client';
import 'react-app-polyfill/ie11';
import 'bootstrap/dist/css/bootstrap.min.css';
import { App } from './src/App';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
