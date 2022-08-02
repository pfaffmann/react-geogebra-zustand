import { Flex, Heading, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { Applet, isDeepSubset, useStore } from '../../../.';
import { useTasksStore } from '../store';
import { ObserverItem } from './ObserverItem';
interface ObserverProps {}

export const Observer: React.FC<ObserverProps> = ({}) => {
  const applets = useStore(state => state.applets);
  const getApplet = useStore(state => state.getApplet);
  const tasks = useTasksStore(state => state.tasks);
  const getTasks = useTasksStore(state => state.getTasks);
  const updateTaskIsDone = useTasksStore(state => state.updateTaskIsDone);

  React.useEffect(() => {
    const ids = Object.keys(applets);
    if (ids.length < 1) return;
    getTasks().map(task => {
      updateTaskIsDone(
        task.id,
        isDeepSubset(
          getApplet(ids[0]),

          task.subset
        )
      );
    });
  }, [applets, tasks]);
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
        {getTasks().map(task => (
          <ObserverItem
            text={task.text}
            isChecked={task.isDone}
            key={task.id}
          />
        ))}
      </Stack>
    </Flex>
  );
};
