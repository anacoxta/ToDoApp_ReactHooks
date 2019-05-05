import React, { useState } from 'react'
import TasksList from './TasksList'
import TasksForm from './TasksForm'
import './App.css'

function TasksApp() {
  const initialTasks = [
    { id: 1, text: 'Contratar a Ana', completed: false },
    { id: 2, text: 'Comprar mais banana', completed: true },
    { id: 3, text: 'Organizar a gincana', completed: false },
  ]

  const [tasks, setTasks] = useState(initialTasks)

  const addTask = newTaskText => {
    setTasks([...tasks, {
      id: 4, text: newTaskText, completed: false
    }])
  }

  return (
    <main className="app">
      <header className="app-header">
        <h1>Task Manager</h1>
      </header>

      <TasksList tasks={tasks} />
      <TasksForm addTask={addTask}/>
    </main>
  )
}

export default TasksApp
