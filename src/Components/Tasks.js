import React, {
  useState,
  // useEffect,
} from 'react';
import '../styles/index.css';
// import { getTasks } from '../services/fetch-utils';
import { createNewTask } from '../services/fetch-utils';
// import TaskList from './TaskList';

export default function Tasks() {
  // const [tasks, setTasks] = useState([]);
  const [newContent, setNewContent] = useState('');

  //clears form
  function clearForm() {
    setNewContent('');
  }

  async function handleAdd(e) {
    e.preventDefault();

    const task = await createNewTask(newContent);
    setNewContent(task);
    clearForm();
  }

  // useEffect(() => {
  //   //create async function to fetch all tasks using getTasks()
  //   const fetchTasks = async () => {
  //     const tasks = await getTasks();
  //     setTasks(tasks);
  //   };
  //   fetchTasks();
  // }, []);

  console.log(newContent);

  return (
    <div className="tasks">
      <div>
        <h1>Your Tasks</h1>
        <p>tasks will go here</p>
        {/* <TaskList tasks={tasks} /> */}
      </div>
      <form className="form" onSubmit={handleAdd}>
        <h2>add to your list</h2>
        <input 
          type="text" 
          name="content" 
          className="input" 
          placeholder="do laundry" 
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}/>
        <button>
          <span></span>
        </button>
        <button>add</button>
      </form>
    </div>
  );
}
