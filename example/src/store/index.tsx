import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer, Applet } from '../../../.';

export type Task = {
  id: string;
  text: string;
  isDone: boolean;
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
    initID: {
      id: 'initID',
      isDone: false,
      text: 'Setze einen Punkt A auf die Koordinate (1, 2).',
      subset: {
        label: 'A',
        coordinates: {
          x: 1,
          y: 2,
          z: 0,
        },
        objectType: 'point',
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
