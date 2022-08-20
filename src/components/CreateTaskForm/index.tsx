import styles from './CreateTask.module.scss';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useAddTask } from '../../state/hooks/useAddTask';

export const CreateTaskForm = () => {
  const [taskContent, setTaskContent] = useState('');
  const addTask = useAddTask();

  const handleTaskInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskContent(e.target.value);
  };

  const handleCreateNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!taskContent) return;

    addTask({ content: taskContent, completed: false });
    setTaskContent('');
  };

  return (
    <form onSubmit={handleCreateNewTask} className={styles.container}>
      <input
        value={taskContent}
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
