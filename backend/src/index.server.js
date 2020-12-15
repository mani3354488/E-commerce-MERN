const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//routes
const authRoutes = require('./routes/auth')
const adminRoutes = require('./routes/admin/auth')


//env variables 
env.config();
db = process.env.MONGO_URI

//mongodb connection
mongoose.connect(
    db, 
    {
        useNewUrlParser: true, useUnifiedTopology: true,
        useCreateIndex: true
    }).then(() => {
    console.log('Connected to db')
});

app.use(bodyParser.json());
app.use('/api', authRoutes)
app.use('/api', adminRoutes)



app.listen(process.env.PORT, () => {
    console.log('server running on port 5000')
});