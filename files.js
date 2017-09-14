/**
 * Created by antonyastrebov on 9/14/17.
 */
var fs = require('fs');

fs.readFile('sfdsfsdf', {encoding: 'utf-8'}, function(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data.toString());
    }
})