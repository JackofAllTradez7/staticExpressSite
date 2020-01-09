var express = require("express");
var app = express();
var path = require('path');
var router = express.Router();

// its a route, the first one in fact
app.get('/', function(req, res)
{
   res.sendFile(path.join(__dirname+"/Views/index.html")); 
});

// about the route
/*app.get('/about', function(req, res)
{
   res.sendFile(path.join(__dirname+"/Views/about.html")); 
});

// contact route acquired
app.get('/contact', function(req, res)
{
   res.sendFile(path.join(__dirname+"/Views/contact.html")); 
});*/

app.use(express.static(__dirname+'/Views'));

app.use('/', router);


app.listen(3000, function()
{
    console.log("Server is ret to go!");
});