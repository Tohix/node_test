/**
 * Created by antonyastrebov on 9/15/17.
 */

var http = require('http');
var fs = require('fs');

function handler(req, res) {
    if (req.url == '/') {
        fs.readFile(__dirname + '/big1.html', function(err, content) {
            if (err) throw err;  // JSON parse invalid

            res.end(content);
        })
    } else {
        res.statusCode = 404;
        res.end('NOT FOUND');
    }
}

var server = new http.createServer(handler);
module.exports = server;