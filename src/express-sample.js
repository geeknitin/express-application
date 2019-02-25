var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var urlEncodeParser = bodyParser.urlencoded({extended: false});

// Get without path parameters
app.get('/', function(req, res){
    res.send('this is the homepage');
});

//Get with Query parameters
app.get('/contact', function(req, res){
    console.log(req.query);
    res.send('this is the contact page for ' + req.query.name);
});

// Post request
app.post('/contact', urlEncodeParser, function(req, res){
    console.log(req.body);
    res.send('this is the contact page for ' + req.query.name);
});


// Get with path parameters

app.get('/profile/:id', function (req, res) {
    res.send('You requested to see to profile' + req.params.id);
});



app.listen(3000);
