import styles from './Header.module.scss';
import todoLogo from '../../assets/todo-logo.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt='Todo logo' />
    </header>
  );
};
