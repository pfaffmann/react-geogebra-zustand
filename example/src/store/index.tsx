import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer, Applet } from '../../../.';

export type Task = {
  id: string;
  text: string;
  isDone: boolean;
  isAid: boolean;
  subset: Partial<Applet>;
};

type TaskStore = {
  tasks: { [key: string]: Task };
  addTask: (task: Task) => void;
  addSubsetToTask: (id: Task['id'], subset: Task['subset']) => void;
  updateTaskIsDone: (id: Task['id'], value: Task['isDone']) => void;
  getTasks: () => Array<Task>;
};

const store = (set, get) => ({
  tasks: {
    task1: {
      id: 'task1',
      isDone: false,
      isAid: true,
      text: 'Wähle die Geodreieck-Variante 2 aus.',
      subset: {
        label: 'Bild1',
        isVisible: true,
        objectType: 'image',
      },
    },
    task2: {
      id: 'task2',
      isDone: false,
      isAid: true,
      text: 'Lege den Nullpunkt des GeoDreiecks auf den Punkt P.',
      subset: {
        label: 'GD_{0}',
        coordinates: { x: 0, y: 2 },
        objectType: 'point',
      },
    },
    task3: {
      id: 'task3',
      isDone: false,
      isAid: false,
      text: 'Die Fehlerzahl ist 0.',
      subset: {
        label: 'Text4',
        valueString: 'Fehler: 0 ',
        objectType: 'text',
      },
    },
  },
  addTask: (task: Task) =>
    set(state => {
      state.tasks[task.id] = task;
    }),
  addSubsetToTask: (id: Task['id'], subset: Task['subset']) =>
    set(state => {
      state.tasks[id].subset = subset;
    }),
  updateTaskIsDone: (id: Task['id'], value: Task['isDone']) =>
    set(state => {
      state.tasks[id].isDone = value;
    }),
  getTasks: () => Object.values(get().tasks),
});

export const useTasksStore = create<TaskStore>()(
  devtools(immer(store), {
    serialize: {
      options: {
        map: true,
      },
    } as any,
  })
);
