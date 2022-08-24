import * as React from 'react';
import { Flex, Text, useToast } from '@chakra-ui/react';
import {
  FiCheckCircle as CheckCircleIcon,
  FiCircle as CircleIcon,
} from 'react-icons/fi';

interface ObserverItemProps {
  text: string;
  isChecked: boolean;
  isAid: boolean;
}

export const ObserverItem: React.FC<ObserverItemProps> = ({
  text,
  isChecked,
  isAid,
}) => {
  const toast = useToast();

  React.useEffect(() => {
    if (!isChecked) return;
    toast({
      title: isAid ? 'Hinweis erledigt' : 'Aufgabe erledigt.',
      description: text,
      status: isAid ? 'info' : 'success',
      duration: 2000,
      isClosable: true,
    });
  }, [isChecked]);

  return (
    <Flex
      px={2}
      bg={isChecked ? 'green.200' : 'gray.100'}
      align="center"
      rounded="sm"
    >
      {isChecked ? <CheckCircleIcon /> : <CircleIcon />}
      <Text ml={4}>{text}</Text>
    </Flex>
  );
};
