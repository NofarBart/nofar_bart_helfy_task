const express = require("express");
const tasksRouter = express.Router();
const {readDB, writeDB} = require("../middleware/db");

//Routes

tasksRouter.get("/", (req, res) => {
    const db = readDB();
    // in case of an empty array (db)
    const tasks = db.tasks || [];
    // if (!db.tasks || db.tasks.length == 0) {
    //     res.status(200).json({message: "Didn't find tasks"});
    // }
    res.status(200).json(tasks);
})

tasksRouter.post("/", (req, res) => {
    const db = readDB();
    let nextID;
    if (db.tasks.length == 0) {
        nextID = 1;
    }
    else {
        const ids = db.tasks.map(task=>task.id);
        const maxID = Math.max(...ids);
        nextID = maxID + 1;
    }

    //add validations
    const newTask = {
        id: nextID,
        title: req.body.title,
        description: req.body.description || "",
        completed: req.body.completed ?? false,
        createdAt: new Date().toLocaleString(),
        priority: req.body.priority
    };
    db.tasks.push(newTask);
    writeDB(db);
    res.status(201).json(newTask);
})

tasksRouter.put("/:id", (req, res) => {
    const db = readDB();
    const taskID = parseInt(req.params.id);
    // find the correct index
    const taskToUpdate = db.tasks.findIndex(task => taskID === task.id);
    if (taskToUpdate === -1) {
        return res.status(404).json({message: "Task was not found"});
    }
    db.tasks[taskToUpdate] = {
        ...db.tasks[taskToUpdate],
        ...req.body
    }
    writeDB(db);
    res.status(200).json(db.tasks[taskToUpdate]);
})

tasksRouter.delete("/:id", (req, res) => {
    const db = readDB();
    // const taskID = parseInt(req.params.id);
    // const taskToUpdate = db.tasks.findIndex(task => taskID === task.id);

    // if (!taskToUpdate) {
    //     return res.status(404).json({message: "Task was not found"});
    // }

    db.tasks = db.tasks.filter(task => task.id != req.params.id);
    writeDB(db);
    res.json({message: "user deleted"});
})

tasksRouter.patch("/:id", (req, res) => {
    const db = readDB();
    const taskID = parseInt(req.params.id);
    // find the correct index
    const taskToUpdate = db.tasks.findIndex(task => taskID === task.id);
    if (!taskToUpdate) {
        return res.status(404).json({message: "Task was not found"});
    }
    db.tasks[taskToUpdate].completed = !db.tasks[taskToUpdate].completed;
    writeDB(db);
    res.status(200).json(db.tasks[taskToUpdate]);
})

module.exports = tasksRouter;