import { CreateTaskArea } from '../../components/CreateTask';
import { Header } from '../../components/Header';
import styles from './App.module.scss';

export default function App() {
  return (
    <main>
      <Header />

      <section className={styles.container}>
        <CreateTaskArea />
      </section>
    </main>
  );
}
