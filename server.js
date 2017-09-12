/**
 * Created by Anton on 12.09.2017.
 */

var User = require('./user');
var db = require('db');
var log = require('logger')(module);

db.connect();
function run() {
    var vasya = new User("Вася");
    var petya = new User("Петя");

    vasya.hello(petya);

    log(db.getPhrase("Run successful"))
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}

