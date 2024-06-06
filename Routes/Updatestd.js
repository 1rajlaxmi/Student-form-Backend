const express = require('express')
const stud = require('../database/stdModul')

const router = express.Router();

router.put('/students/rollno/:rollno', async (req, res) => {
    try {
        const updatedStudent = await stud.findOneAndUpdate({ RollNo: req.params.rollno }, req.body, { new: true, runValidators: true });
        if (!updatedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;