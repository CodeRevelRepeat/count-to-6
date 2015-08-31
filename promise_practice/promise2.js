var superProm = new Promise(function(resolve, reject){
  setTimeout(function(){resolve("I'm being promised.")}, 2000);
  setTimeout(function(){reject("I'm being rejected.")}, 1000);
})
  //Can put success and failure functions as two arguments of then
  .then(function(input){console.log(input)}, function(input){console.log(input + "!")})



//Or can catch error case:


var superProm = new Promise(function(resolve, reject){
  setTimeout(function(){resolve("I'm being promised.")}, 2000);
  setTimeout(function(){reject("I'm being rejected.")}, 1000);
})
  .then(function(input){console.log(input)})
  .catch(function(input){console.error(input)})

