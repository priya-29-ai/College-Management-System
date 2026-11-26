const mongoose = require('mongoose');
const path = require('path');

// Load environment variables from backend/.env
require('dotenv').config({
    path: path.resolve(__dirname, '../../.env')
});

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log('MongoDB Connected Successfully');
    } catch (error) {
        console.error('MongoDB Connection Failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;