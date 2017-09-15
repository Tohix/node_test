/**
 * Created by antonyastrebov on 9/15/17.
 */

var fs = require('fs');
var http = require('http');

new http.Server(function(req, res) {

    if (req.url == '/big.html') {
        var file = new fs.ReadStream(__dirname +'/big.html');
        sendFile(file, res);
    }
}).listen(3000);

function sendFile(file, res) {
    file.pipe(res);

    file.on('error', function(err) {
        res.statusCode = 500;
        res.end("Server Error");
        console.log(err);
    })

    file
        .on('open', function() {
            console.log('open');
        })
        .on('close', function() {
            console.log('close');
        })

    // res.on('close', function(){
    //     console.log(11);
    //     file.destroy();
    // })
   // file.pipe(process.stdout);
}

// var stream = new fs.ReadStream(__filename, {encoding: 'utf-8'});
//
// stream.on('readable', function() {
//   var data = stream.read();
//   console.log(data);
// });
//
// stream.on('end', function() {
//     console.log('THE END');
// })



