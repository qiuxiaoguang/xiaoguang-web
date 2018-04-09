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

//
var hostname = 'www.fenbi.com';

//端口号
var serverPort = 3000;

var app = express();
app.use(express.static(path.join(__dirname, '/dist')));
app.use(compression());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next){
	var domain = d.create();
	domain.on('error', function(error){
		console.log(error);
		log.error(error);
	})
	domain.add(req);
	domain.add(res);
	domain.run(next);
})

process.on('uncaughtException', function(error) {
	console.log(error);
	log.error(error);
})


app.get('/', function(req, res){
	res.sendFile(__dirname + '/dist/index.html');
})


var server = app.listen(serverPort, function(){
	var host = server.address().address;
	var port = server.address().port ;
	console.log('the app is on http://' + host + ':' + port);
})