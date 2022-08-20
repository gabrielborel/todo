import { useSetRecoilState } from 'recoil';
import { ITask } from '../../interfaces/Task';
import { tasksState } from '../atom';

export const useToggleTask = () => {
  const setTasks = useSetRecoilState<ITask[]>(tasksState);

  return (task: ITask) => {
    return setTasks((previousTasks) =>
      previousTasks.map((previousTask) =>
        previousTask.id === task.id ? { ...task, completed: !task.completed } : { ...previousTask }
      )
    );
  };
};
