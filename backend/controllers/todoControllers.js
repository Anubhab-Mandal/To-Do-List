const Todo = require('../models/todoModels');


const getAllTodos = async (req, res) => {
    try {
        const tasks = await Todo.find().sort({ createdAt: -1 })
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const getTodo = async (req, res) => {
    try {
        const tasks = await Todo.findById(req.params.id);
        if (!tasks) {
            return res.status(404).json({ message: "Task not found" })
        }
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const createTodo = async (req, res) => {
    try {
        const task = new Todo({
            title: req.body.title
        });
        const savedTask = await task.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const updateTodo = async (req, res) => {
    try {
        const updatedTask = await Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const deleteTodo = async (req, res) => {
    try {
        const task = await Todo.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        } res.json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const toggleTodo = async (req, res) => {
    try {
        const task = await Todo.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        task.completed = !task.completed;
        // task.updatedAt = Date.now();

        const updatedTask = await task.save();
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllTodos,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo,
    toggleTodo
}