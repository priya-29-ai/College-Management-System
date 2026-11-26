const express = require('express');
const router = express.Router();

const {
    getFees,
    addFee,
    updateFee
} = require('../controllers/feeController');

const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, getFees);
router.post('/', authMiddleware, addFee);
router.put('/:id', authMiddleware, updateFee);

module.exports = router;