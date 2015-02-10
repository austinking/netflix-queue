#!/usr/bin/env node
var storage = require('./lib/storage');

console.log(process.argv);

storage.saveJSON({hello: 'world'}, function(err) {
  storage.loadJSON(function(err, obj) {
    if (err) {
        console.error(err);
    } else {
        console.log(obj);    
    }
  });
});
