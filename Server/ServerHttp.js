var http = require('http');
var fs = require('fs');
var cors = require('cors');
var express = require('express');
var app = express();
var resolve = require('path').resolve

app.get('/listImage', cors(), function (req, res) {
	const imgFolder = '..\\images\\slideshow\\';
	console.log(resolve(imgFolder));
	console.log("List of images at http://%s", resolve(imgFolder));
	res.setHeader('Content-Type', 'application/json');
	var imagesPath = [];
	fs.readdirSync(imgFolder).forEach(file => {
		imagesPath.push(imgFolder + file);
		
		})
	console.log(imagesPath);
	res.json(imagesPath);
	//console.log("List of images:", res)
})
	

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');