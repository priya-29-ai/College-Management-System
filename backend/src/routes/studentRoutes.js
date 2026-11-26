const express = require('express');
const router = express.Router();

const {
    getStudents,
    addStudent,
    getStudentById,
    updateStudent,
    deleteStudent
} = require('../controllers/studentController');

const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, getStudents);
router.post('/', authMiddleware, addStudent);
router.get('/:id', authMiddleware, getStudentById);
router.put('/:id', authMiddleware, updateStudent);
router.delete('/:id', authMiddleware, deleteStudent);

module.exports = router;