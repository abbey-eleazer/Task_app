import express from "express";
import {db}  from "../postgres/db.js";
const app = express();
const port = 3000;

const router = express.Router();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Task API");
});

// GET all tasks
router.get("/", (req, res) => {
  res.json(tasks);
});

// Get a task by ID
router.get("/:id", (req, res) => {
  const taskId = Number(req.params.id);
  const task = tasks.find((task) => task.id === taskId);
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
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex((c) => c.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  const { title, description, status } = req.body;

  if (title) tasks[index].title = title;
  if (description) tasks[index].description = description;
  if (status) tasks[index].status = status;

  res.json(tasks[index]);
});

// DELETE task by ID
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex((c) => c.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Task not found" });
  }
  const deleted = tasks.splice(index, 1)[0];
  res.json({ message: "task deleted successfully", task: deleted });
});

app.use("/api/v1/tasks", router);
app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
