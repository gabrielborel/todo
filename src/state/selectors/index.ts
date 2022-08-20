import { selector } from 'recoil';
import { tasksState } from '../atom';

export const createdTasksState = selector({
  key: 'createdTasksState',
  get: ({ get }) => {
    const tasks = get(tasksState);
    return tasks.length;
  },
});

export const completedTasksState = selector({
  key: 'completedTasksState',
  get: ({ get }) => {
    const tasks = get(tasksState);
    const completedTasks = tasks.filter((task) => task.completed);
    return completedTasks.length;
  },
});
