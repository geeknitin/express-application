// controller for handling to do lists
var bodyParser = require('body-parser');

var urlEncodeParser = bodyParser.urlencoded({extended: false});


var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some ass'}];


module.exports = function (app){

    // Get without path parameters
    app.get('/todo', function(req, res){
        res.render('todo', {todos: data});
    });

    // Post request
    app.post('/todo', urlEncodeParser, function(req, res){
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:item', function(req, res){
        data = data.filter(function (todo) {
            return todo.item.replace(/ /g, '-') !== req.params.item;
        })

    });
};
