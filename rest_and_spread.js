"use strict";

let array = [1, 2, 3];

//use rest here so that variable number of arguments can be used and args is a real array
var sum = function(...args){
  return args.reduce(function(accum, curr){return accum += curr});
}

//spread array so that 1, 2, 3 are arguments in sum
console.log(sum(...array));


console.log(...array);