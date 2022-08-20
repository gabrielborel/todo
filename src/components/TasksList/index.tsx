import { ClipboardText } from 'phosphor-react';
import styles from './Tasks.module.scss';
import { Task } from './Task';
import { useRecoilValue } from 'recoil';
import { tasksState } from '../../state/atom';
import { completedTasksState, createdTasksState } from '../../state/selectors';

export const TasksList = () => {
  const tasks = useRecoilValue(tasksState);
  const createdTasksCount = useRecoilValue(createdTasksState);
  const completedTasksCount = useRecoilValue(completedTasksState);

  return (
    <section className={styles.container}>
      <div className={styles.tasksStats}>
        <strong className={styles.createdTasks}>
          Tarefas criadas <span>{createdTasksCount}</span>
        </strong>
        <strong className={styles.completedTasks}>
          Concluídas{' '}
          <span>{!createdTasksCount ? 0 : `${completedTasksCount} de ${createdTasksCount}`}</span>
        </strong>
      </div>

      <div className={styles.tasksList}>
        {tasks.length === 0 ? (
          <div className={styles.tasksListEmpty}>
            <ClipboardText size={56} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          tasks.map((task) => <Task key={task.id} task={task} />)
        )}
      </div>
    </section>
  );
};
