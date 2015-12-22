/**
 * Created by hpyzik on 18.12.15.
 */
var events = require('events');
var eventEmitter = new events.EventEmitter();

var list1 = function (param) {
    console.log('list 1 ' + param);
};

var list2 = function (param) {
    console.log('list 2 ' + param);
};

var list3 = function (param) {
    console.log('list 3 ' + param);
};

eventEmitter.addListener('connection', list1);
eventEmitter.on('connection', list2);
eventEmitter.on('connection', list1);

var eventListeners = events.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + ' listeners listening to connection event');

eventEmitter.emit('connection', 'a');
eventEmitter.removeListener('connection', list1);
eventEmitter.emit('connection', 'b');

eventListeners = events.EventEmitter.listenerCount(eventEmitter, 'connection');
//eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + ' listeners listening to connection event');

var eventEmitter2 = new events.EventEmitter();
eventEmitter2.on('connection', list3);
eventEmitter2.on('connection', list2);
eventEmitter2.emit('connection', 'c');

console.log('Program end');
