import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from "axios";
import '../App.css';
import TaskFilter from '../components/TaskFilter';

function Home() {
  
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  

  // fetch tasks
  useEffect(() => {
      Axios.get("http://localhost:4000/api/tasks").then(res => setTasks(res.data));
  }, []) 

  const deleteTask = async (id) => {
        await Axios.delete(`http://localhost:4000/api/tasks/${id}`);
        const res = await Axios.get('http://localhost:4000/api/tasks');
        setTasks(res.data);
  }

  return (
    <div className="App">
      {/* <h1>Tasks:</h1> */}
      

      
      <TaskFilter tasks={tasks} onDelete={deleteTask}></TaskFilter>
      <button onClick={() => navigate("/addTask")}>Add Task</button>
    {/* <button onClick={() => AddTask()}></button> */}
  </div>
  );
}

export default Home;
