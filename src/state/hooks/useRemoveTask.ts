import { useSetRecoilState } from 'recoil';
import { ITask } from '../../interfaces/Task';
import { tasksState } from '../atom';

export const useRemoveTask = () => {
  const setTasks = useSetRecoilState<ITask[]>(tasksState);

  return (task: ITask) => {
    return setTasks((previousTasks) => previousTasks.filter((prevTask) => prevTask.id !== task.id));
  };
};
