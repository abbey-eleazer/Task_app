import express from "express";
import {db}  from "../postgres/db.js";
const app = express();
const port = 3000;

const router = express.Router();

app.use(express.json());

app.use((req, res, next) => {
  const timestamps = new Date().toISOString();
  console.log(`[${timestamps}] ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to the task API");
});

// GET all tasks
router.get("/tasks", async (req, res) => {
  const allTasks = await db.select().from(tasks);

  res.json(allTasks);
});

// Get a task by ID
router.get("/:id", (req, res) => {
 const taskId = parseInt(req.params.id);
 const taskIndex = tasks.findIndex((c) => c.id === taskId);

 if (taskIndex === -1) {
   return res.status(404).json({ error: "Task not found" });
 }
 res.json(tasks[taskIndex]);
});

// create new task
router.post("/tasks", async (req, res) => {
  const { title, description, status } = req.body;

  if (!title || !description || !status) {
    return res.status(404).json({ error: "Missing fields required" });
  }
  const [newTask] = await db.insert(tasks).values({ title, description, status }).returning();
  res.status(201).json(newTask);
});

// Update a task by ID
router.put("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((c) => c.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  const { title, description, status } = req.body;

  if (title) tasks[taskIndex].title = title;
  if (description) tasks[taskIndex].description = description;
  if (status) tasks[taskIndex].status = status;

  res.json(tasks[taskIndex]);
});

// DELETE task by ID
router.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex((c) => c.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Task not found" });
  }
  const deleted = tasks.splice(index, 1)[0];
  res.json({ message: "task deleted successfully", task: deleted });
});

app.use("/api/v1", router);
app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
