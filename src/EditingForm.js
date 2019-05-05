import React from 'react'
import useInputState from './hooks/useInputState'

function EditingForm({ id, text, editTask, toggleEditingForm }) {

  const [value, handleChange, reset] = useInputState(text)

  return (

    <form className="form" onSubmit={(event) => {
      event.preventDefault()
      editTask(id, value)
      reset()
      toggleEditingForm()
    }}>
      <input
        autoFocus
        type="text"
        className="input editing"
        // placeholder="Adicione nova tarefa"
        value={value}
        onChange={handleChange}
      />
    </form>

/* PEDAÇO COPIADO DO TasksForm.js ----------------
    <form
      className="form"
      onSubmit={e => {
        e.preventDefault()
        addTask(value)
        reset()
      }}
    >
      <input
        autoFocus
        type="text"
        className="input"
        placeholder="Adicione nova tarefa"
        value={value}
        onChange={handleChange}
      />
    </form> 
 ------------------------------------------------*/
  )
}

export default EditingForm