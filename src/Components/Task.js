import React from 'react';
import { useState } from 'react';
import '../styles/Task.css';

//import
import { deleteTask, completeTask } from '../services/fetch-utils';

export default function Task({ task, tasks, setTasks }) {
  const [checked, setChecked] = useState(false);


  async function handleDelete(e, taskToBeDeleted) {
    e.preventDefault();

    const deleteTasks = await deleteTask(taskToBeDeleted.id);
    const newTasks = tasks.filter(task => taskToBeDeleted.id !== task.id);

    setTasks(newTasks);
  }


  async function handleCheck(taskToBeCompleted) {
    const completeTasks = await completeTask(taskToBeCompleted);
    setChecked(!checked);
  }

  return (
    <div className="task-card">
      <h4>
        <input 
          type="checkbox" 
          title="check off task"
          value={checked}
          onChange={() => handleCheck(task)}
        ></input>
        {task.content}
        <button 
          className="material-symbols-outlined"
          title="delete task forever"
          onClick={(e) => handleDelete(e, task)}>delete</button>
      </h4>
      
    </div>
  );
}
