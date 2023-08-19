const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors') // This is better than using header

const app = express();

const userRoutes = require('./routes/router-poll');
const login = require('./routes/login');

console.log('This is our node app');

//app.use(bodyParser.urlencoded({extended: false})); // This is for form post
app.use(bodyParser.json()); // application/json

/*
app.use((req,res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    //res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    //res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}
)
*/
app.use(cors());


app.use(userRoutes);
app.use(login);


app.listen(3000);