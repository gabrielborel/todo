import { useState } from 'react';
import { ClipboardText, Trash, Check } from 'phosphor-react';
import styles from './Tasks.module.scss';
import classNames from 'classnames';
import { Task } from './Task';

export const TasksList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas magni, nulla autblanditiis deserunt',
      completed: false,
    },
    {
      id: 2,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas magni, nulla autblanditiis deserunt',
      completed: true,
    },
    {
      id: 3,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas magni, nulla autblanditiis deserunt',
      completed: false,
    },
  ]);

  return (
    <section className={styles.container}>
      <div className={styles.tasksStats}>
        <strong className={styles.createdTasks}>
          Tarefas criadas <span>0</span>
        </strong>
        <strong className={styles.completedTasks}>
          Concluídas <span>0</span>
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
          tasks.map(({ completed, content, id }) => (
            <Task completed={completed} content={content} id={id} key={id} />
          ))
        )}
      </div>
    </section>
  );
};
