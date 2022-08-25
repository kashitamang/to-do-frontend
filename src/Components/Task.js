import React, { useState } from 'react';
import '../styles/Task.css';

//import
import { deleteTask } from '../services/fetch-utils';

export default function Task({ task, tasks, setTasks }) {

  //handleDelete
  async function handleDelete(e, taskToBeDeleted) {
    e.preventDefault();

    const deleteTasks = await deleteTask(taskToBeDeleted.id);
    const newTasks = tasks.filter(t => taskToBeDeleted.id !== t.id);
    // console.log(newTasks);

    setTasks(newTasks);
    //t is for task we are operating on could be "task"
  }

  return (
    <div className="task-card">
      <h4>
        {/* <input type="checkbox" checked={task.completed}></input> */}
        {task.content}
        {
          //listen to the change
        }
        <button onClick={(e) => handleDelete(e, task)}>delete</button>
      </h4>
      
    </div>
  );
}
