const Attendance = require('../models/Attendance');

// Get All Attendance
const getAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.find()
            .populate('student')
            .populate('course');

        res.status(200).json({
            success: true,
            count: attendance.length,
            attendance
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Mark Attendance
const markAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.create(req.body);

        res.status(201).json({
            success: true,
            message: 'Attendance marked successfully',
            attendance
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    getAttendance,
    markAttendance
};