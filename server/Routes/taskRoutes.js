import express from "express";

import { createTask,
     getTasks, 
     updatedTask,
     toggleTaskStatus,
     deleteTask
    } from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getTasks);

router.post("/",createTask);

router.put("/:id",updatedTask);

router.patch("/:id/toggle", toggleTaskStatus);

router.delete("/:id", deleteTask);

export default router;