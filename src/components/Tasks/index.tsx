import styles from './Tasks.module.scss';

export const Tasks = () => {
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

      <div className={styles.tasksList}></div>
    </section>
  );
};
