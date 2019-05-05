import React from 'react'


function Task({text, completed, removeTask, id }) {
  return (
    <li className="single-task">
      {/* <div className="left-align"> */}
        <input type="checkbox" tabIndex={-1} checked={completed}/>
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