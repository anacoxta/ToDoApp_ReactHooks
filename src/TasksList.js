import React from 'react'
import Task from './Task'

function TasksList({tasks, removeTask}) {
  //if (tasks.length) {
    return (
      <ul className="list">

        {tasks.map(task => (
          <Task
            id={task.id}
            key={task.id}
            text={task.text}
            completed={task.completed}
            // deleteTask={deleteTask}
            removeTask={removeTask}
          />
        )
        )
        }


      </ul>
    )
  //} return null;

}

export default TasksList
