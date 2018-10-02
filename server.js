const environment = process.env.NODE_ENV || 'development';
const express = require('express');
const bodyParser = require('body-parser');

const portOptions = {development: 8000,test : 6000}
const defaultPort = portOptions[environment];
const PORT = process.env.PORT || defaultPort;
const knex = require('./db/knex');
let path = require('path');



const methodOverride = require('method-override');

let app = express();
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

let items = require('./routes/items');
app.use(items);
let users = require('./routes/users');
app.use(users);
app.use('/index',(req,res,next)=>{
    res.render('index');
})
app.use('/about',(req,res,next)=>{
    res.render('about');
})

app.use(express.static('comps'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.listen(PORT,()=>{
    console.log('HERE I AM !!');
})

module.exports = app;