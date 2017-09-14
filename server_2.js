/**
 * Created by antonyastrebov on 9/13/17.
 */
var http = require('http');
//var debug = require('debug')('server');


var server = http.createServer();

server.on('request', require('./request'));

server.listen(1337, '127.0.0.1');

// console.log('Server is running');