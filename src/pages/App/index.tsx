import { CreateTaskForm } from '../../components/CreateTaskForm';
import { Header } from '../../components/Header';
import { Tasks } from '../../components/Tasks';
import styles from './App.module.scss';

export default function App() {
  return (
    <main>
      <Header />

      <section className={styles.container}>
        <CreateTaskForm />

        <Tasks />
      </section>
    </main>
  );
}
