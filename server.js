const express = require('express');
const mongoose = require('mongoose');
const bodyParser =('body-parser');

const app= express();

app.use(express.json());

//DB CONFIG
const db = require('./config/keys').mongoURI;

//connect
mongoose
    .connect(db)
    .then( () => console.log('MongoDB connected'))
    .catch(err=> console.log(err));

const port = process.env.PORT || 5153;
app.listen(port, () => console.log(`server startet on port: ${port}`));