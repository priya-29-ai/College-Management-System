const Fee = require('../models/Fee');

// Get All Fees
const getFees = async (req, res) => {
    try {
        const fees = await Fee.find().populate('student');

        res.status(200).json({
            success: true,
            count: fees.length,
            fees
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Add Fee
const addFee = async (req, res) => {
    try {
        const fee = await Fee.create(req.body);

        res.status(201).json({
            success: true,
            message: 'Fee added successfully',
            fee
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Update Fee
const updateFee = async (req, res) => {
    try {
        const fee = await Fee.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!fee) {
            return res.status(404).json({
                success: false,
                message: 'Fee record not found'
            });
        }

        res.json({ success: true, fee });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    getFees,
    addFee,
    updateFee
};