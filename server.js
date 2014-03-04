var http = require('http');
var querystring = require('querystring');

var server = http.createServer();

server.on('request', function(req, res){
	var body = '';
	console.log(req.method);
	req
		.on('readable', function() {
			body += req.read();
		})
		.on('end', function() {
			body = querystring.parse(body);
			console.dir(body);
		});
	var content = '<form action="" method="post">'+
					'<input type="text" name="textfild">'+
					'<input type="password" name="passfild">'+
					'<input type="submit" value="post"></form>';
	res.setHeader('Content-Type', 'text/html');
	res.end(content);
});
server.listen(8000);
