var events = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var angela = new Person('angela');
var malcom = new Person('malcom');
var people = [james, angela, malcom];

people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' said: ' + mssg);
    })
});

james.emit('speak', 'hey dudes');
angela.emit('speak', 'what you doin ?');