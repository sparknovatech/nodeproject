var express = require('express')
var app = express();

var port = process.env.PORT;

app.use(express.static('public'));  // setting static directory
app.use(express.static('src/views'));
app.use(express.static('bower_components'));

app.get('/',function(req,res){
    res.send('Hello World');
    
});

app.get('/routing',function(req,res){
    res.send('Hello Routing');
    
});


app.listen(port,function(err){
   console.log('The Server is Running on port: ' + port); 
});