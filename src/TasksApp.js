import React, { useState, useEffect } from 'react'
import TasksList from './TasksList'
import TasksForm from './TasksForm'
import './App.css'
import uuid from 'uuid/v4'

function TasksApp() {

  // const initialTasks = 
  //   [{ id: 1, text: 'Contratar a Ana', completed: false },
  //    { id: 2, text: 'Comprar mais banana', completed: false }]  

  const initialTasks = JSON.parse(window.localStorage.getItem('tasks') || '[]')

  const [tasks, setTasks] = useState(initialTasks)

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

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
    const updatedTasks = tasks.filter(task => task.id !== taskId)
  }

  const toggleTask = taskId => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    )
    setTasks(updatedTasks)
  }

  const editTask = (taskId, newTask) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, text: newTask} : task
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
        editTask={editTask}
      />
      <TasksForm addTask={addTask} />
    </main>
  )
}

export default TasksApp
