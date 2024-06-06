const express = require('express');
const Std = require('../database/stdModul');

const router = express.Router();

// Create a new student
router.post('/reg', async (req, res) => {
    const { Name, RollNo, Age, Department, Class,Course } = req.body;
  const std = new Std({ Name, RollNo, Age, Department, Class,Course });
  try {
    const savedUser = await std.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;
