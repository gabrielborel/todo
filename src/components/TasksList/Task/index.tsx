import classNames from 'classnames';
import { Check, Trash } from 'phosphor-react';
import { ITask } from '../../../interfaces/Task';
import styles from './Task.module.scss';

interface TaskProps {
  task: ITask;
}

export const Task = ({ task }: TaskProps) => {
  return (
    <div
      className={classNames(styles.task, {
        [styles.taskCompleted]: task.completed,
      })}
    >
      <button key={task.id} className={styles.checkBox}>
        {task.completed ? <Check size={14} weight='bold' /> : ''}
      </button>

      <p className={styles.taskContent}>{task.content}</p>

      <button className={styles.deleteTask}>
        <Trash size={20} />
      </button>
    </div>
  );
};
