/**
 * Created by antonyastrebov on 9/13/17.
 */
var http = require('http');
var url = require('url');

// var server = new http.Server();
//
// server.listen(1337, '127.0.0.1');
//
// var counter = 0;
// server.on('request', function(req, res) {
//     res.end('Hello world! ' + ++counter);
// })
//-------------------


var server = new http.Server();

server.on('request', function(req, res){

    var urlParsed = url.parse(req.url, true);
    debugger;

    if (urlParsed.pathname == '/echo' && urlParsed.query.message) {
        res.end(urlParsed.query.message);
        return;
    }

    res.statusCode = 404;
    res.end("Page not found");
});

server.listen(1337, '127.0.0.1');

console.log('server is running');