/**
 * Created by Anton on 12.09.2017.
 */

require('./user');
var vasya = new User("Вася");
var petya = new User("Петя");

vasya.hello(petya);
