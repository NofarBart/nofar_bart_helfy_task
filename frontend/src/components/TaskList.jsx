import React from 'react';
import { useState, useEffect } from 'react';
import Axios from "axios";
import '../App.css';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete }) => {

    return (
        <div>
            <ul className='task-list'>
                {tasks.map((task, index) => (
                        <TaskItem key={task.id} task={task} onDelete={onDelete}></TaskItem>
                ))}
            </ul>
        </div>
    )
}

export default TaskList
