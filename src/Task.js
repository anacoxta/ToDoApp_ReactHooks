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
      
        // *KNOW BUG:
        // 'Warning: Failed prop type: You provided a `checked` prop to a form field without an `onChange` handler.'
        
        // *TO-DO —> REFACTOR LATER:
        <label className="task-container">
          <input type="checkbox" checked={completed} onClick={() => toggleTask(id)}/>
          <span className="styled-checkmark"  ></span>
          <span className={completed ? 'done' : ''}>{text}</span>
          <div className='align-right'>
            <button className="btn-edit" onClick={toggle}>Edit</button>
            <button className="btn-delete" onClick={() => removeTask(id)}>
              x
            </button>
          </div>
        </label>
      )}
    </li>
  )
}

export default Task
