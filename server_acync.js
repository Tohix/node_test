/**
 * Created by antonyastrebov on 9/14/17.
 */

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    var info;

    if (req.url == '/') {
        fs.readFile('index.html', function(err, info) {
            if (err) {
                console.log(err);
                res.statusCode = 500;
                res.end("Internal Error");
                return;
            }
            res.end(info);
        })
    }
}).listen(3000);
