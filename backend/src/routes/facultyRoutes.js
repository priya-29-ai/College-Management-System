const express = require('express');
const router = express.Router();

const {
    getFaculty,
    addFaculty,
    updateFaculty,
    deleteFaculty
} = require('../controllers/facultyController');

const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, getFaculty);
router.post('/', authMiddleware, addFaculty);
router.put('/:id', authMiddleware, updateFaculty);
router.delete('/:id', authMiddleware, deleteFaculty);

module.exports = router;