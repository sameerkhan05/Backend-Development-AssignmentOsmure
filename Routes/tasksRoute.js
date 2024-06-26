const express = require("express");
const router = express.Router();

let task = [];
let id = 1;

router.get("/", (req, res) => {
  console.log(task);
  res.status(200).json(task);
});

// Creating task
router.post("/", (req, res) => {
  try {
    const { title, description, completed } = req.body;
    validation({ title, description, completed });
    const newTask = {
      id: id++,
      title,
      description,
      completed,
    };
    task.push(newTask);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Retrieve task by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const foundTask = task.find((task) => task.id === parseInt(id));
  if (!foundTask) {
    res.status(404).json({ message: "Task not found" });
  } else {
    res.status(200).json(foundTask);
  }
});

//Deleteing task
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const idx = task.findIndex((task) => task.id === parseInt(id));
  if (idx === -1) {
    res.status(404).json({ message: "Task not found" });
  } else {
    task.splice(idx, 1);
    res.status(200).json({ message: "Task deleted successfully" });
  }
});

//updating task
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const idx = task.findIndex((task) => task.id === parseInt(id));
  if (idx === -1) {
    res.status(404).json({ message: "Task not found" });
  } else {
    const { title, description, completed } = req.body;
    validation({ title, description, completed });
    task[idx] = { id: parseInt(id), title, description, completed };
    res.status(200).json(task[idx]);
  }
});

//Funcation for validation
function validation(taskData) {
  const { title, description, completed } = taskData;
  if (!title || !description) {
    throw new Error("Tiele and descreption required");
  }
}

module.exports = router;
