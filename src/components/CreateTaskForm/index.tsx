import styles from './CreateTask.module.scss';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';

export const CreateTaskForm = () => {
  const [taskValue, setTaskValue] = useState('');

  const handleTaskInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskValue(e.target.value);
  };

  const handleCreateNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!taskValue) return;

    setTaskValue('');
    console.log(taskValue);
  };

  return (
    <form onSubmit={handleCreateNewTask} className={styles.container}>
      <input
        value={taskValue}
        onChange={handleTaskInputChange}
        className={styles.inputTask}
        type='text'
        placeholder='Adicione uma nova tarefa'
      />

      <button className={styles.createTaskButton} type='submit'>
        Criar
        <PlusCircle size={20} />
      </button>
    </form>
  );
};
