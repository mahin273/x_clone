const express = require('express');
const { serverConfig } = require('./config');
const { connectDb } = require('./config');
const app = express();

connectDb();
app.listen(serverConfig.PORT, () => {

    console.log(`Server successfully running on port :${serverConfig.PORT}`)
})