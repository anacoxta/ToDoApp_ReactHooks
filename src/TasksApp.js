import React, { useState } from 'react'
import TasksList from './TasksList'
import TasksForm from './TasksForm'
import './App.css'
import uuid from 'uuid/v4'

function TasksApp() {
  const initialTasks = [
    { id: 1, text: 'Contratar a Ana', completed: false },
    { id: 2, text: 'Comprar mais banana', completed: true },
  ]

  const [tasks, setTasks] = useState(initialTasks)

  const addTask = newTaskText => {
    setTasks([
      ...tasks,
      {
        id: uuid(),
        text: newTaskText,
        completed: false,
      },
    ])
  }

  const removeTask = taskId => {
    //filter task for removal
    const updatedTasks = tasks.filter(task => task.id !== taskId)
    //call setTasks with new array
    setTasks(updatedTasks)
  }

  const toggleTask = taskId => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    )
    setTasks(updatedTasks)
  }

  return (
    <main className="app">
      <header className="app-header">
        <h1>Task Manager</h1>
      </header>

      <TasksList
        tasks={tasks}
        removeTask={removeTask}
        toggleTask={toggleTask}
      />
      <TasksForm addTask={addTask} />
    </main>
  )
}

export default TasksApp
