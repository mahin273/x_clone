const mongoose = require('mongoose');
require('dotenv').config();

const connectDb=async function() {
    await mongoose.connect(process.env.DBLINK);
}


module.exports = connectDb;
