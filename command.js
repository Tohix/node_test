/**
 * Created by antonyastrebov on 9/19/17.
 */

var http = require('http');

var opts = require('optimist').argv;

http.createServer(function(req, res) {
    res.end('The server is running');

}).listen(opts.port);

console.log(process.env.HOME);