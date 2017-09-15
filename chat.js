/**
 * Created by antonyastrebov on 9/15/17.
 */

var http = require('http');
var fs = require('fs');
var chat = require('./chatObj');

http.createServer(function(req, res) {

    switch (req.url) {
        case '/':
            sendFile(__dirname + '/chat.html', res);
            break;

        case '/subscribe':
            chat.subscribe(req, res);
            //
            break;

        case '/publish':
            var body = '';

            req
                .on('readable', function() {
                    var obj = req.read();
                    if (obj) {
                        body += obj;
                    }
                    // console.log(obj);
                })
                .on('end', function() {
                    try {
                        body = JSON.parse(body);
                        console.log(body);
                    } catch (e) {
                        res.statusCode = 400;
                        res.end('Bad request');
                        return;
                    }

                    chat.publish(body.message);
                    res.end('ok');

                })
            //
            break;

        default:
            res.statusCode = 404;
            res.end('Not Found');
    }
}).listen(3000);

function sendFile(fileName, res) {

    var fileStream = fs.createReadStream(fileName, {encoding: 'utf-8'});

    fileStream.on('error', function() {
        res.statusCode == 500;
        res.end("Server error");
    })
        .pipe(res);

};


