import { readTasks, writeTasks } from "../utils/fileHelper.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await readTasks();

    tasks.sort(
      (a, b) =>
        new Date(b.createdAt) -
        new Date(a.createdAt)
    );

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({
        message: "Title is required",
      });
    }

    const tasks = await readTasks();

    const newTask = {
      id: Date.now().toString(),
      title,
      description: description || "",
      dueDate: dueDate || "",
      completed: false,
      createdAt: new Date().toISOString(),
    };

    tasks.push(newTask);

    await writeTasks(tasks);

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};