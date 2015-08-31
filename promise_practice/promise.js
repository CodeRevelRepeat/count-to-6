'use strict';

var fs = require('fs');



new Promise(function (resolve, reject) {
  fs.readFile('./myfile.txt', function (err, file) {
    if (err) {
      return reject(err);
    }
    console.log('in promise')
    console.log(resolve);
    resolve(file);
  });
}).then(function(file){console.log("all done", file.toString())
}).catch(console.log.bind(console));


