import { Header } from './components/Header';

import styles from './App.module.css';
import { Tasks } from './components/Tasks';
import './global.css';

export function App() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.wrapper}>        
        <Tasks />
      </div>
    </div>
  )
}
