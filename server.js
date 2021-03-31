const express = require('express');
const mongoose = require('mongoose');
const bodyParser =('body-parser');
const items = require('./routes/api/items');
const path = require('path');



const app= express();

app.use(express.json());

//DB CONFIG
const db = require('./config/keys').mongoURI;

//connect
mongoose
    .connect(db)
    .then( () => console.log('MongoDB connected'))
    .catch(err=> console.log(err));

//use routes
app.use('/api/items', items);

//Serve static assets if in Production
if(process.env.NODE_ENV === 'production'){
    //Set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res)=> 
    {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

    }
    
    )
}




const port = process.env.PORT || 5153;
app.listen(port, () => console.log(`server startet on port: ${port}`));