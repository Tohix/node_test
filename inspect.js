/**
 * Created by antonyastrebov on 9/13/17.
 */
var util = require('util');

var str = util.format("My %s %d %j", "string", 1223, {test: "obj"});

console.log(str);