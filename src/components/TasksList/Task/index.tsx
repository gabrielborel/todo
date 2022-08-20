import classNames from 'classnames';
import { Check, Trash } from 'phosphor-react';
import { ITask } from '../../../interfaces/Task';
import { useRemoveTask } from '../../../state/hooks/useRemoveTask';
import { useToggleTask } from '../../../state/hooks/useToggleTask';
import styles from './Task.module.scss';

interface TaskProps {
  task: ITask;
}

export const Task = ({ task }: TaskProps) => {
  const toggleTask = useToggleTask();
  const removeTask = useRemoveTask();

  const handleToggleTaskCompletion = (task: ITask) => {
    toggleTask(task);
  };

  const handleRemoveTask = (task: ITask) => {
    removeTask(task);
  };

  return (
    <div
      className={classNames(styles.task, {
        [styles.taskCompleted]: task.completed,
      })}
    >
      <button
        onClick={() => handleToggleTaskCompletion(task)}
        key={task.id}
        className={styles.checkBox}
      >
        {task.completed ? <Check size={13} weight='bold' /> : ''}
      </button>

      <p className={styles.taskContent}>{task.content}</p>

      <button onClick={() => handleRemoveTask(task)} className={styles.deleteTask}>
        <Trash size={20} />
      </button>
    </div>
  );
};
