const express = require("express");
const router = express.Router();

const task = [];
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

//Funcation for validation
function validation(taskData) {
  const { title, description, completed } = taskData;
  if (!title || !description) {
    throw new Error("Tiele and descreption required");
  }
}

module.exports = router;
