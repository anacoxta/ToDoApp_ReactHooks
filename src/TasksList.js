import React from 'react'
import Task from './Task'

function TasksList(props) {
  //if (tasks.length) {
    return (
      <ul className="list">

        {props.tasks.map(task => (
          <Task
            id={task.id}
            text={task.text}
            key={task.id}
            completed={task.completed}
            // deleteTask={deleteTask}
            // removeTask={removeTask}
          />
        )
        )
        }


      </ul>
    )
  //} return null;

}

export default TasksList
