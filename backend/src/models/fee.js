const mongoose = require('mongoose');

const feeSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    paidDate: {
        type: Date,
        default: null
    },
    status: {
        type: String,
        enum: ['Pending', 'Paid', 'Partial'],
        default: 'Pending'
    }
}, {
    timestamps: true
});

module.exports = mongoose.models.Fee ||
    mongoose.model('Fee', feeSchema);