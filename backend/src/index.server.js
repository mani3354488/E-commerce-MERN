const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//routes
env.config();

//mongodb connection
db = process.env.MONGO_URI
mongoose.connect(
    db, 
    {
        useNewUrlParser: true, useUnifiedTopology: true
    }).then(() => {
    console.log('Connected to db')
});


app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Hello from Server'
    });

})

app.post('/data', (req, res, next) => {
    res.status(200).json({
        message: req.body
    });

})

app.listen(process.env.PORT, () => {
    console.log('server running on port 5000')
});