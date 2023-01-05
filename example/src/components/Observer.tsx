import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Stack,
} from '@chakra-ui/react';
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
      rounded="lg"
      shadow="lg"
      flexDirection="column"
      minW="calc(45vw - 2rem - 40px)"
    >
      <Heading as="h1" size="xl">
        Observer
      </Heading>
      <Stack spacing={1}>
        {getTasks().filter(task => task.isAid).length > 0 && (
          <Accordion allowMultiple allowToggle>
            {getTasks()
              .filter(task => task.isAid)
              .map((task, index) => (
                <AccordionItem key={task.id}>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton>
                          <Box flex="1" textAlign="left">
                            {`Hilfestellung ${index + 1}`}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        {isExpanded && (
                          <ObserverItem
                            text={task.text}
                            isChecked={task.isDone}
                            isAid={task.isAid}
                            key={task.id}
                          />
                        )}
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
          </Accordion>
        )}
        {getTasks()
          .filter(task => !task.isAid)
          .map(task => (
            <ObserverItem
              text={task.text}
              isChecked={task.isDone}
              isAid={task.isAid}
              key={task.id}
            />
          ))}
      </Stack>
    </Flex>
  );
};
