import React from 'react';

export default function Task({ task }) {
  return (
    <div className="task-card">
      <h4>{task.content}</h4>
      <input type="checkbox" checked={task.completed}></input>
    </div>
  );
}
