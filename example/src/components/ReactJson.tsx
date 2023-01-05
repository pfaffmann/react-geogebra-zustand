import * as React from 'react';
import loadable from '@loadable/component';
import { Applets, useStore } from '../../../.';
import { Flex, Heading } from '@chakra-ui/react';
const Json = loadable(() => import('react-json-view'));

interface ReactJsonProps {}

export const ReactJson: React.FC<ReactJsonProps> = ({}) => {
  const src = useStore(state => state.applets);

  return (
    <Flex
      width="calc(50vw - 2rem - 20px)"
      height="400px"
      overflowY="auto"
      flexDirection="column"
      p={'1rem'}
      shadow="lg"
      rounded="lg"
      bg="white"
    >
      <Heading as="h1" size="lg" mb={2}>
        Zustand
      </Heading>
      <Json src={src} collapsed={2} />
    </Flex>
  );
};
