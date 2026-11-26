const express = require('express');
const router = express.Router();

const {
    getNotices,
    addNotice,
    deleteNotice
} = require('../controllers/noticeController');

const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, getNotices);
router.post('/', authMiddleware, addNotice);
router.delete('/:id', authMiddleware, deleteNotice);

module.exports = router;