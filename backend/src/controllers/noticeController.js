const Notice = require('../models/Notice');

// Get All Notices
const getNotices = async (req, res) => {
    try {
        const notices = await Notice.find()
            .populate('publishedBy', 'name email');

        res.status(200).json({
            success: true,
            count: notices.length,
            notices
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Add Notice
const addNotice = async (req, res) => {
    try {
        const notice = await Notice.create({
            ...req.body,
            publishedBy: req.user.id
        });

        res.status(201).json({
            success: true,
            message: 'Notice added successfully',
            notice
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Delete Notice
const deleteNotice = async (req, res) => {
    try {
        const notice = await Notice.findByIdAndDelete(req.params.id);

        if (!notice) {
            return res.status(404).json({
                success: false,
                message: 'Notice not found'
            });
        }

        res.json({
            success: true,
            message: 'Notice deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    getNotices,
    addNotice,
    deleteNotice
};