import express from "express";

const app = express();

app.use(express.json());

// Health check
app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok", service: "task-manager-api" });
});

// Sample API
app.get("/api/tasks", (_req, res) => {
  res.json([
    { id: 1, title: "Setup project", completed: true },
    { id: 2, title: "Build API", completed: false }
  ]);
});

export default app;
