import { useRecoilValue } from 'recoil';
import { ITask } from '../../interfaces/Task';
import { tasksState } from '../atom';

export const useGetTasks = () => useRecoilValue<ITask[]>(tasksState);
