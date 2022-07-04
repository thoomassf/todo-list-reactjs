import TodoLogo from '../assets/ToDoLogo.svg';

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={TodoLogo} alt="Logotipo do To Do" />
    </header>
  );
}