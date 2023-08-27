import { Check } from 'phosphor-react';
import TrashIcon from '../assets/TrashIcon.svg';
import styles from './TaskItem.module.css';

interface TaskItemProps {
  id: number;
  text: string;
  completed: boolean;
  onTaskComplete: (taskId: number) => void
  onTaskDelete: (taskId: number) => void
}

export function TaskItem({ id, text, completed, onTaskComplete, onTaskDelete}: TaskItemProps) {;
  function handleCompleteClick() {
    onTaskComplete(id);
  }

  function handleDeleteClick() {
    onTaskDelete(id);
  }
  
  return (
    <div className={styles.container} >      
    
      <div className={styles.itemDescription}>
        <button 
          onClick={handleCompleteClick} 
          className={styles.checkbox}
          style={
            { 
              backgroundColor: completed ? 'var(--purple)' : '',
              border: completed ? 'var(--purple)' : '2px solid var(--blue)',
            }
          }
        >
          {completed && (
            <span>
               <Check size={12} className={styles.checkIcon} />  
            </span> 
          )}
          
        </button>
          
        <span style={
          { 
            textDecoration: completed ? 'line-through' : 'none', 
            color: completed ? 'var(--gray-300)' : '',
          }
        }>
          {text}
        </span>
      </div>
      
      <button onClick={handleDeleteClick} className={styles.button}>
        <img src={TrashIcon} alt="Ícone de lixeira" className={styles.buttonIcon} />
      </button>
    </div>
  )
}