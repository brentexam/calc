//add dependencies
var express = require('express');
var router = express.Router();

//adding the url dependency to read the querystring
var url = require('url');

router.get('/', function (req, res, next) {

    //get the querystring
    var query = url.parse(req.url, true).query;

    //get the method, and x&y values from the query
    var method = query.method;
    var x = query.x;
    var y = query.y;
    
    // Turn the method query to a string and the XY to a Integer
    method = String(method);
    x = parseInt(x);
    y = parseInt(y);
    
    // Set base result to 0 and let it change depending on the values and calculate and set it to result.
    var result = 0;
    
        if(method == "add")
        result = x + y;
    else if(method == "subtract")
        result = x - y;
    else if(method == "multiply")
        result = x * y;
    else if(method == "divide")
        result = x / y;

    //build output messages to display in the jade template
    var message = ("Method " + method + " gives result " + result);
    var message2 =(x + " " + method + " " + y + " = " + result);

    //show the calculator.jade view
    res.render('calculator', { title: 'Assignment 1', message: message, message2: message2 });
})


module.exports = router;




