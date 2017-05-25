var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

const PORT = 3000;

// initialize our app to be an instance of express
var app = express();

app.get('/',function(req,res){
	// res.sendFile(path.join(__dirname,'../index.html'));
	console.log('Hey there');
	res.sendFile( __dirname + "/index.html" );
	console.log('Hey there');
});

app.listen(PORT,function(){
	console.log('App Listening on port 3000');
});