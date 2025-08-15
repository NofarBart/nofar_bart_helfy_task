import React from 'react';
import { useState, useEffect } from 'react';
import Axios from "axios";
import PriorityColor from '../services/PriorityColor';
import '../App.css';

const TaskItem = ({ task, onDelete }) => {
    const handleDelete = () => {
        const confirmed = window.confirm(`Are you sure you want to delete this task? "${task.title}"?`);
        if (confirmed) {
            onDelete(task.id);
        }
    }


    return (
        <div>
            <li className='task-item'>
                <p><strong>task ID: </strong>{task.id}</p>
                <input type='text' name='title'></input>
                <p><strong>title: </strong>{task.title}</p>
                <p><strong>description: </strong>{task.description}</p>
                <label>
                    Completed:
                    <input
                        type="checkbox"
                        checked={task.completed}
                        readOnly
                    />
                </label>
                {/* <p><strong>completed: </strong>{task.completed ? "Yes" : "No"}</p> */}
                <p><strong>createdAt: </strong>{task.createdAt}</p>
                <p><strong>priority: </strong>
                    <PriorityColor priority={task.priority}></PriorityColor>
                </p>
                <button onClick={() => handleDelete()}>Delete</button>
            </li>
        </div>
    )
}

export default TaskItem
