import styles from './Tasks.module.scss';

export const Tasks = () => {
  return (
    <section className={styles.container}>
      <div className={styles.tasksStats}>
        <strong className={styles.tasksCreateds}>
          Tarefas criadas <span>0</span>
        </strong>
        <strong className={styles.tasksCompleteds}>
          Concluídas <span>0</span>
        </strong>
      </div>
    </section>
  );
};
