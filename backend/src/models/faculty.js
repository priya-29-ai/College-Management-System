const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String
    },
    department: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    qualification: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Faculty', facultySchema);
