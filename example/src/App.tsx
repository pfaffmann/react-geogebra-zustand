import * as React from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { GeoGebraScriptInjector, GeoGebra } from '../../.';
import { Observer } from './components/Observer';
import { ReactJson } from './components/ReactJson';
import { Log } from './components/Log';

export const App = () => {
  const [logs, setLogs] = React.useState<string[]>([]);
  return (
    <ChakraProvider>
      <GeoGebraScriptInjector />
      <Flex
        py={'2rem'}
        px={'1rem'}
        flexDirection="column"
        bg="#DEDEDE"
        maxW={'calc(100vw)'}
        minHeight="calc(100vh)"
      >
        <Flex
          flexDirection={['column', 'column', 'column', 'row']}
          alignItems="center"
          justifyContent={[
            'flex-start',
            'flex-start',
            'flex-start',
            'space-between',
          ]}
          pb={'1rem'}
        >
          <GeoGebra
            id="app1"
            width={600}
            height={400}
            material_id="vtcdcune"
            useBrowserForJS={false}
            showMenuBar={false}
            showToolBar={false}
            algebraInputPosition="none"
            allowStyleBar={false}
            showResetIcon
            showZoomButtons={false}
            showFullscreenButton={false}
            onLog={log => {
              setLogs(old => [...old, log]);
            }}
          />
          <Log logs={logs} />
          <ReactJson />
        </Flex>

        <Observer />
      </Flex>
    </ChakraProvider>
  );
};
