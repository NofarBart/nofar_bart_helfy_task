import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Axios from 'axios';
import '../App.css'


const AddTask = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");

    const navigate = useNavigate();

    const addTask = async () => {
        if (!title || !description || !priority) return;
        // const currentTime = new Date().toLocaleString();
        const res = await Axios.post("http://localhost:4000/api/tasks", { title, description, priority })
        navigate("/");
    }

    return (
        <div className='form'> Adding a new task
            <div>
                <input placeholder='title' value={title} onChange={e => { setTitle(e.target.value) }}></input>
            </div>
            <div>
                <input placeholder='description' value={description} onChange={e => { setDescription(e.target.value) }}></input>
            </div>
            <div>
                <select value={priority} onChange={e => { setPriority(e.target.value) }}>
                    <option value="">Select Priority</option>
                    <option value="high">High</option>
                    <option value="medium">Meduim</option>
                    <option value="low">Low</option>
                </select>
            </div>
            <button onClick={() => addTask()}>Add New Task</button>
        </div>
    )
}

export default AddTask