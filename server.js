var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression'); 
var http = require('http');
var https = require('https');
var path = require('path');
var querystring = require('querystring');
var d = require('domain');

var log4js = require('./log');
var log = log4js.logger;

var app = express();
app.use(express.static(path.join(__dirname, '/dist')));
app.use(compression());

app.get('/', function(req, res){
	res.sendFile(__dirname + '/dist/index.html');
})

var serverPort = 3000;


var server = app.listen(serverPort, function(){
	var host = server.address().address;
	var port = server.address().port ;
	console.log('the app is on http://' + host + ':' + port);
})