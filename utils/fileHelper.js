import fs from "fs/promises";

const FILE_PATH = "./data/tasks.json";

export const readTasks = async () => {
  const data = await fs.readFile(FILE_PATH, "utf-8");
  return JSON.parse(data);
};

export const writeTasks = async (tasks) => {
  await fs.writeFile(
    FILE_PATH,
    JSON.stringify(tasks, null, 2)
  );
};