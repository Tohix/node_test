/**
 * Created by antonyastrebov on 9/14/17.
 */

// var http = require('http');
//
// var server = http.createServer(function(req, res) {
//     process.nextTick(function() {
//         req.on('readable', function() {
//             //
//         })
//     });
// }).listen(3000);

// setTimeout(function() {
//     server.close();
// }, 3000)
//
// var timer = setInterval(function() {
//     console.log(process.memoryUsage());
// }, 1000);
//
// timer.unref();
// timer.ref();

var fs = require('fs');

fs.open(__filename, 'r', function(err, file) {
    console.log('1123123');
})

setImmediate(function() {
    console.log('immediate');
})

process.nextTick(function() {
    console.log('nextTick');
})