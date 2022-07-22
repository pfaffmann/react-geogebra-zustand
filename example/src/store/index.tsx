import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer, Applet } from '../../../.';

export type Task = {
  id: string;
  text: string;
  isDone: boolean;
  appletSubset: Partial<Applet>;
};

type TaskStore = {
  tasks: { [key: string]: Task };
};

const store = set => ({
  tasks: {
    initID: {
      id: 'initID',
      isDone: false,
      text: 'Setze einen Punkt A auf die Koordinate (1, 2).',
      appletSubset: {
        xml:
          '<element type="point" label="A"> <show object="true" label="true"/> <objColor r="125" g="125" b="255" alpha="0"/> <layer val="0"/> <labelMode val="0"/> <animation step="0.1" speed="1" type="1" playing="false"/> <pointSize val="5"/> <pointStyle val="0"/> <coords x="1" y="0" z="1"/> </element>',
      },
    },
  },
  addTask: (task: Task) =>
    set(state => {
      state.tasks[task.id] = task;
    }),
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
