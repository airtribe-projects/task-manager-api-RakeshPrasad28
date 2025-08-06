let tasks = require("../models/taskModel.js");

const getAllTasks = (req, res) => {
  res.json(tasks);
};

const getTaskById = (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
};

const createTask = (req, res) => {
  const { title, description, completed } = req.body;

  if (!title || !description || completed === undefined) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    title,
    description,
    completed,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
};

const updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((t) => t.id === id);

  if (taskIndex === -1) return res.status(404).json({ message: "Task not found" });
  const { title, description, completed } = req.body;
  if (!title || !description || completed === undefined) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  tasks[taskIndex] = { id, title, description, completed };
  res.json(tasks[taskIndex]);
};

const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((t) => t.id === id);

  if (taskIndex === -1) return res.status(404).json({ message: "Task not found" });

  const deleted = tasks.splice(taskIndex, 1);
  res.json({ message: "Task deleted", task: deleted[0] });
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
