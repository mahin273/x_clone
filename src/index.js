const express = require('express');
const { serverConfig } = require('./config');
const { connectDb } = require('./config');
const Tweet = require('./models/tweet');
const app = express();

connectDb();

app.listen(serverConfig.PORT, () => {

    console.log(`Server successfully running on port :${serverConfig.PORT}`)
})
