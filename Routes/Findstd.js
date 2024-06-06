const express = require('express')
const stud = require('../database/stdModul')

const router = express.Router();

// Get all students
router.get('/students', async (req, res) => {
    try {
        const students = await stud.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get a student by RollNo
router.get('/students/rollno/:rollno', async (req, res) => {
    try {
        const student = await stud.findOne({ RollNo: req.params.rollno });
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;