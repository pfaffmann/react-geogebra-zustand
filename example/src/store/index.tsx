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
    task0: {
      id: 'task0',
      isDone: false,
      isAid: true,
      text: 'Ändere die Position des Punktes Q.',
      subset: {
        label: 'Q',
        wasDragged: true,
        objectType: 'point',
      },
    },
    task1: {
      id: 'task1',
      isDone: false,
      isAid: true,
      text: 'Schau dir die Hilfe an',
      subset: {
        label: 'e1',
        value: 1,
        objectType: 'boolean',
      },
    },
    task2: {
      id: 'task2',
      isDone: false,
      isAid: true,
      text: 'Lass dir die Kurve anzeigen.',
      subset: {
        label: 'm_{1}',
        objectType: 'boolean',
        value: 1,
      },
    },

    task4: {
      id: 'task4',
      isDone: false,
      isAid: true,
      text: 'Aktiviere die Spur.',
      subset: {
        label: 'F',
        objectType: 'point',
        xml: { trace: { val: 'true' } },
      },
    },
    task3: {
      id: 'task3',
      isDone: false,
      isAid: false,
      text: 'Bewege Q auf eine Position, so dass die Sehnenlänge maximal wird.',
      subset: {
        label: 'Q',
        objectType: 'point',
        coordinates: { x: 13.006148224686648, y: 5.848849140798627 },
      },
    },
    task5: {
      id: 'task5',
      isDone: false,
      isAid: false,
      text: 'Bewege Q auf eine Position, so dass die Sehnenlänge maximal wird.',
      subset: {
        label: 'Q',
        objectType: 'point',
        coordinates: { x: 11, y: 9.302301718402752 },
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
