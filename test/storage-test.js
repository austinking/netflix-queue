var assert = require('assert');

var storage = require('../lib/storage');

describe('storage', function() {
    describe('loadJSON', function() {
        it('always returns an object', function(done) {
            storage.loadJSON(function(err, obj) {
                assert.equal(err, null);
                assert.equal(typeof obj, 'object');
                done();
            });
        });
    });
});
