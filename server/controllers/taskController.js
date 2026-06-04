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

export const updatedTask = async (req,res)=>{
    try {
        const {id}=req.params;
        const {title,description,dueDate}=req.body

        const tasks =await readTasks();

        const taskIndex=tasks.findIndex((task)=>
                task.id===id
        )

        if(taskIndex=== -1){
            res.status(404).json({
                message:"Task not available"
            })
        }

        tasks[taskIndex] ={
            ...tasks[taskIndex],
            title,
            description,
            dueDate,
        }  
        
        await writeTasks(tasks)

        res.status(200).json(tasks[taskIndex]);
    } catch (error) {
        res.status(500).json({
      message: error.message,
    });
    }
}

export const toggleTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;

    const tasks = await readTasks();

    const task = tasks.find(
      (task) => task.id === id
    );

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    task.completed = !task.completed;

    await writeTasks(tasks);

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const tasks = await readTasks();

    const filteredTasks = tasks.filter(
      (task) => task.id !== id
    );

    if (filteredTasks.length === tasks.length) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    await writeTasks(filteredTasks);

    res.status(200).json({
      message: "Deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};