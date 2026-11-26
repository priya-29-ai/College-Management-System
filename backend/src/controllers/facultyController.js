const Faculty = require('../models/Faculty');

// Get All Faculty
const getFaculty = async (req, res) => {
    try {
        const faculty = await Faculty.find();

        res.status(200).json({
            success: true,
            count: faculty.length,
            faculty
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Add Faculty
const addFaculty = async (req, res) => {
    try {
        const faculty = await Faculty.create(req.body);

        res.status(201).json({
            success: true,
            message: 'Faculty added successfully',
            faculty
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Update Faculty
const updateFaculty = async (req, res) => {
    try {
        const faculty = await Faculty.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!faculty) {
            return res.status(404).json({
                success: false,
                message: 'Faculty not found'
            });
        }

        res.json({ success: true, faculty });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Delete Faculty
const deleteFaculty = async (req, res) => {
    try {
        const faculty = await Faculty.findByIdAndDelete(req.params.id);

        if (!faculty) {
            return res.status(404).json({
                success: false,
                message: 'Faculty not found'
            });
        }

        res.json({
            success: true,
            message: 'Faculty deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    getFaculty,
    addFaculty,
    updateFaculty,
    deleteFaculty
};