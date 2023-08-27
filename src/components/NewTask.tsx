import { PlusCircle } from 'phosphor-react';
import styles from './NewTask.module.css';

export function NewTask() {
  return (
    <div className={styles.newTask}>
      <input
        className={styles.input} 
        type="text" 
        placeholder="Adicione uma nova tarefa" 
      />

      <button className={styles.button}>
        Criar
        <PlusCircle size={20} className={styles.icon} />
      </button>
    </div>
  );
}