import React from 'react';
import Task from './Task';

export default function TaskList({ tasks }) {
  return (
    <div className="task-list">
      {tasks.map((task, i) => (
        <Task key={task.content + i} task={task}/>
      ))}
    </div>
  );
}
