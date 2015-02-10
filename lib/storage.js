var fs = require('fs');

const jsondb = './netflix.db';

/**
 * @param json {string or object} The object you want to save
 * @param cb {function} The callback recieves an argument (err) which will
 *   be null or an Error object
 */
exports.saveJSON = function(json, cb) {
    if (typeof json === 'object') {
        json = JSON.stringify(json);
    }
    fs.writeFile(jsondb, json, {encoding: 'utf8'}, cb);
}

/**
 * @param cb {function} The callback recieves two arguments (err, obj).
 * `err` which will be null or an Error object. `obj` will be a JavaScript
 * object revived from JSON storage. This object will be empty initially.
 */
exports.loadJSON = function(cb) {
    fs.exists(jsondb, function(exists) {
      if (exists) {
        fs.readFile(jsondb, {encoding: 'utf8'}, function(err, data) {
            if (err) {
                return cb(err);
            }
            try {
                return cb(null, JSON.parse(data));
            } catch (e) {
                return cb(e);
            }
        });
      } else {
        cb(null, {});
      }
    });   
}