import React from 'react'


function Task({id, text, completed, removeTask, toggleTask }) {
  return (
    <li className="single-task">
      {/* <div className="left-align"> */}
        <input type="checkbox" tabIndex={-1} checked={completed} onClick={() => toggleTask(id)}/>
          <span className={completed ? 'done' : ''}>{text}</span>
      {/* </div> */}
      {/* <div className="right-align"> */}
        <button className="btn-edit">Edit</button>
        <button className="btn-delete" onClick={
          () => removeTask(id)
        }>x</button>
      {/* </div> */}
    </li>
  )
}

export default Task