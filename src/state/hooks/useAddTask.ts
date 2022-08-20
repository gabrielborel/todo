import { useSetRecoilState } from 'recoil';
import { ITask } from '../../interfaces/Task';
import { tasksState } from '../atom';
import { v4 as uuidv4 } from 'uuid';

export const useAddTask = () => {
  const setTasks = useSetRecoilState<ITask[]>(tasksState);

  return (task: ITask) => {
    task.id = uuidv4();

    return setTasks((previousTasks) => [...previousTasks, task]);
  };
};
