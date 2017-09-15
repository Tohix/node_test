/**
 * Created by antonyastrebov on 9/15/17.
 */


var domain = require('domain');
var serverDomain = domain.create();



serverDomain.on('error', function(err) {
    console.error("Домен перехватил %s", err);
})

serverDomain.run(function() {
    var server = require('./domain_server');
    server.listen(3000);
})