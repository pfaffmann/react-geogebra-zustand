import * as React from 'react';
import { ChakraProvider, Link, Wrap, WrapItem } from '@chakra-ui/react';
import { GeoGebraScriptInjector, GeoGebra } from '../../.';
import { Observer } from './components/Observer';
import { ReactJson } from './components/ReactJson';
import { Log } from './components/Log';

export const App = () => {
  const [logs, setLogs] = React.useState<string[]>([]);
  return (
    <ChakraProvider>
      <GeoGebraScriptInjector />
      <Link href="https://www.geogebra.org/m/wjgQ3PQB" target={'_blank'}>
        https://www.geogebra.org/m/wjgQ3PQB
      </Link>
      <Wrap spacing={'20px'} p="2rem">
        <WrapItem>
          <GeoGebra
            id="app1"
            width={600}
            height={400}
            material_id="wjgQ3PQB"
            useBrowserForJS={false}
            showMenuBar={false}
            showToolBar={false}
            enableShiftDragZoom={false}
            algebraInputPosition="none"
            allowStyleBar={false}
            showResetIcon
            showZoomButtons={false}
            showFullscreenButton={false}
            onLog={log => {
              setLogs(old => [...old, log]);
            }}
          />
        </WrapItem>
        <WrapItem>
          <Observer />
        </WrapItem>
        <WrapItem>
          <Log logs={logs} />
        </WrapItem>
        <WrapItem>
          <ReactJson />
        </WrapItem>
      </Wrap>
    </ChakraProvider>
  );
};
