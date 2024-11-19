const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async function () {
    try {
        await mongoose.connect(process.env.DBLINK);
        console.log('Database connected successfully'); // Log success message
    } catch (error) {
        console.error('Database connection failed:', error.message); // Log error message
    }
};

module.exports = connectDb;