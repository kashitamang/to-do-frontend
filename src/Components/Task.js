import React from 'react';
import '../styles/Task.css';

export default function Task({ task }) {
  return (
    <div className="task-card">
      <h4>
        <input type="checkbox" checked={task.completed}></input>
        {task.content}
      </h4>
      
    </div>
  );
}
