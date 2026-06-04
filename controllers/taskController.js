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