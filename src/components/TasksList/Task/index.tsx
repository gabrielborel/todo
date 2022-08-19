import classNames from 'classnames';
import { Check, Trash } from 'phosphor-react';
import styles from './Task.module.scss';

interface TaskProps {
  completed: boolean;
  id: number;
  content: string;
}

export const Task = ({ id, content, completed }: TaskProps) => {
  return (
    <div
      className={classNames(styles.task, {
        [styles.taskCompleted]: completed,
      })}
    >
      <button key={id} className={styles.checkBox}>
        {completed ? <Check size={14} weight='bold' /> : ''}
      </button>

      <p className={styles.taskContent}>{content}</p>

      <button className={styles.deleteTask}>
        <Trash size={20} />
      </button>
    </div>
  );
};
