import React from 'react'
import Task from './Task'

function TasksList({tasks, removeTask, toggleTask, editTask }) {
  //if (tasks.length) {
    return (
      <ul className="list">

        {tasks.map(task => (
          <Task
            id={task.id}
            key={task.id}
            text={task.text}
            completed={task.completed}
            removeTask={removeTask}
            toggleTask={toggleTask}
            editTask={editTask}
          />
        )
        )
        }


      </ul>
    )
  //} return null;

}

export default TasksList
