import React from 'react'
import { useState, useEffect } from 'react';
import TaskList from './TaskList';

const TaskFilter = ({tasks, onDelete}) => {
    const [search, setSearch] = useState("all");
    const filteredTasks = tasks.filter(task => (search === "all") || (search === "completed" && task.completed === true) ||
    (search === "pending" && task.completed === false));

    return (
        <div>
            <select value={search}
                    onChange={e => setSearch(e.target.value)}>
                <option value= "all">All</option>
                <option value= "completed">Completed</option>
                <option value= "pending">Pending</option>
            </select>
            <TaskList tasks={filteredTasks} onDelete={onDelete}></TaskList>
        </div>
    )
}

export default TaskFilter