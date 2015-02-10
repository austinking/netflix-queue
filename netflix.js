#!/usr/bin/env node
var storage = require('./lib/storage');


console.log(process.argv);

//storage.saveJSON(JSON.stringify({hello: 'world'}), function(err, a) {
  storage.loadJSON(function(err, obj) {
    console.log(arguments);
  });
//});

