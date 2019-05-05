import React from 'react'
import useInputState from './hooks/useInputState'

function TasksForm({addTask}) {
  const [value, handleChange, reset] = useInputState('')
  return (
    <form className="form" onSubmit={e=> {
      e.preventDefault()
      addTask(value)
      reset()
    }

    }>
      <input
        autoFocus
        type="text"
        className="input"
        placeholder="Adicione nova tarefa"
        value={value}
        onChange={handleChange}
      />
    </form>
  )
}

export default TasksForm