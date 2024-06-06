const express = require('express')
const stud = require('../database/stdModul')

const router = express.Router();

router.delete('/students/rollno/:rollno', async (req, res) => {
    try {
        const deletedStudent = await stud.findOneAndDelete({ RollNo: req.params.rollno });
        if (!deletedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;