import { RecoilRoot } from 'recoil';
import { CreateTaskForm } from '../../components/CreateTaskForm';
import { Header } from '../../components/Header';
import { TasksList } from '../../components/TasksList';
import styles from './App.module.scss';

export default function App() {
  return (
    <RecoilRoot>
      <main>
        <Header />

        <section className={styles.container}>
          <CreateTaskForm />

          <TasksList />
        </section>
      </main>
    </RecoilRoot>
  );
}
