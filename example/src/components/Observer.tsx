import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useStore } from '../../../.';
import { useTasksStore } from '../store';
import { ObserverItem } from './ObserverItem';
interface ObserverProps {}

export const Observer: React.FC<ObserverProps> = ({}) => {
  const applets = useStore(state => state.applets);
  const tasks = useTasksStore(state => state.tasks);
  React.useEffect(() => {
    //console.log(tasks);
  }, [applets]);
  return (
    <Flex
      bg="white"
      maxWidth="100vw"
      p={2}
      rounded="lg"
      shadow="lg"
      flexDirection="column"
    >
      <Heading as="h1" size="xl">
        Observer
      </Heading>
      <Stack spacing={1}>
        {Object.entries(tasks).map(([key, task]) => (
          <ObserverItem text={task.text} isChecked={true} key={key} />
        ))}
      </Stack>
    </Flex>
  );
};
