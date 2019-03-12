var counter_v = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
};


var adder_v = function(a,b){
    return `The sum of the 2 numbers is ${a+b}`;
}

var pi_v = 3.142;

//module.exports.counter = counter;
//module.exports.adder = adder;
//module.exports.pi = pi;

module.exports = {
    counter: counter_v,
    adder: adder_v,
    pi: pi_v
};