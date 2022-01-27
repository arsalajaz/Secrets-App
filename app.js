//jshint esversion:6
const express = require('express');
const ejs = require('ejs');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({
    extended: true
}));

app.get('/', function(req, res){
    res.render('home');
})

app.listen('3000', function (err) {
    console.log('Server started on port 3000')
});