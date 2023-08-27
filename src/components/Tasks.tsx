import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import Clipboard from '../assets/Clipboard.png';

import { TaskItem } from './TaskItem';
import styles from './Tasks.module.css';

interface TaskProps {
  id: number;
  text: string;
  completed: boolean;
}

export function Tasks() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [newTaskText, setNewTaskText] = useState<string>('')

  function addTask() {
    if (newTaskText.trim() === '') return

    const newTask: TaskProps = {
      id: tasks.length + 1,
      text: newTaskText,
      completed: false,
    }

    setTasks([...tasks, newTask]);
    setNewTaskText('');
  }

  function completeTask(taskId: number) {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    )
    setTasks(updatedTasks)
  }

  function deleteTask(taskId: number) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(updatedTasks)
  }

  const totalTasks = tasks.length
  const completedTasks = tasks.filter((task) => task.completed).length

  return (
    <main className={styles.tasks}>
      <div className={styles.newTask}>
        <input
          className={styles.input} 
          type="text" 
          placeholder="Adicione uma nova tarefa" 
          onChange={(e) => setNewTaskText(e.target.value)}
        />

        <button onClick={addTask} className={styles.button}>
          Criar
          <PlusCircle size={20} className={styles.icon} />
        </button>
      </div>  

      <div className={styles.tasksHeader}>
        <div className={styles.typeTask}>
          <h4 className={styles.typeLabelLeft}>Tarefas criadas</h4>
          
          <span className={styles.contador}>
            {totalTasks}
          </span>
        </div>

        <div className={styles.typeTask}>
          <h4 className={styles.typeLabelRight}>Concluídas</h4>
          
          <span className={styles.contador}>
            {tasks.length === 0 ? (
              <>
                {completedTasks}
              </>
            ) : (
              <>
                {completedTasks} de {totalTasks}
              </>
            )}
          </span>
        </div>
      </div>

      <div className={styles.tasksContent}>

        {tasks.length === 0 ? (
          <div className={styles.taskBlank}>
            <img 
              src={Clipboard} 
              alt="Ícone de caderno" 
              className={styles.clickBoardImg} 
            />

            <p className={styles.taskDescription}><strong>Você ainda não tem tarefas cadastradas</strong>
              <br/>Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        ) : (
          <>
            {tasks.map((task) => (
              <TaskItem
                key={task.id} 
                id={task.id}
                text={task.text}
                completed={task.completed}
                onTaskComplete={completeTask}
                onTaskDelete={deleteTask}
              />
            ))}
          </>
        )}
      </div>
    </main>
  )
}