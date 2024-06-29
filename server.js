
var http = require('http');
var querystring = require('querystring');

var server = http.createServer().listen(80);

server.on('request', function (req, res) {
    if (req.method == 'POST') {
        var body = '';
    }

    req.on('data', function (data) {
        body += data;
    });

    req.on('end', function () {
        var post = querystring.parse(body);
        console.log(post);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World_server\n');
    });
});

console.log('Listening on port 80');
