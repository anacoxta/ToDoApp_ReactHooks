import React from 'react'
import useToggleState from './hooks/useToggleState'
import EditingForm from './EditingForm'

function Task({ id, text, completed, removeTask, toggleTask, editTask }) {
  const [isEditing, toggle] = useToggleState(false)

  return (
    <li className="single-task">
      {isEditing ? (
        <EditingForm editTask={editTask} id={id} text={text} toggleEditingForm={toggle}/>
      ) : (
        <>
          <input
            type="checkbox"
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleTask(id)}
          />
          <span className={completed ? 'done' : ''}>{text}</span>
          <button className="btn-edit" onClick={toggle}>Edit</button>
          <button className="btn-delete" onClick={() => removeTask(id)}>
            x
          </button>
        </>
      )}
    </li>
  )
}

export default Task
