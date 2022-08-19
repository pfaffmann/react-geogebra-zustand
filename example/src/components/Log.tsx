import * as React from 'react';

import { Flex, Heading, Text, Stack } from '@chakra-ui/react';

interface LogProps {
  logs: string[];
}

export const Log: React.FC<LogProps> = ({ logs }) => {
  return (
    <Flex
      width="400px"
      height="400px"
      overflowY="auto"
      flexDirection="column"
      p={'1rem'}
      shadow="lg"
      rounded="lg"
      bg="white"
    >
      <Heading as="h1" size="lg" mb={2}>
        Log
      </Heading>
      {logs.length > 0 && (
        <Stack spacing={2} flexDirection="column-reverse">
          {logs.map((log, index, { length }) => {
            if (index + 1 + 10 < length) return null;
            return <Text key={index}>{index + 1 + '. ' + log}</Text>;
          })}
        </Stack>
      )}
    </Flex>
  );
};
