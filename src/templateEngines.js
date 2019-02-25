var express = require('express');

var app = express();

// Sending the file name in response object
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
