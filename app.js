console.log("hello node-js-playground");

var stuff = require('./stuff');

 //   console.log(stuff.counter(['mike', 'sarah', 'matthew', 'alice']));
 //   console.log(stuff.adder(5, 6));
 //   console.log(stuff.pi);
 //   console.log(stuff.adder(stuff.pi, 6));

var events = require('events');

var myEmmiter = new events.EventEmitter();

myEmmiter.on('someEvent', function(mssg){
    console.log(mssg);
});

myEmmiter.emit('someEvent', 'the event was emitted');