import React from 'react'

function TasksList(props) {

  return (

    <ul className="list">
      {props.tasks.map(task => (
        <li className="single-task">{task.text}</li>
      ))}
    </ul>
    
  )

}

export default TasksList