const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true,
        trim: true
    },
    courseCode: {
        type: String,
        required: true,
        unique: true
    },
    department: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    faculty: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Faculty'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Course', courseSchema);