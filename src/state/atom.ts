import { atom } from 'recoil';
import { ITask } from '../interfaces/Task';

export const tasksState = atom<ITask[]>({
  key: 'tasksState',
  default: [],
});
