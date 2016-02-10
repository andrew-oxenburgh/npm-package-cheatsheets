'use strict';

var should = require('should');

describe('native js functions', function () {
    it('remove element of array - using splice', function () {
        var ar = [1, 3, 5, 6];
        ar.splice(ar.indexOf(3), 1);
        ar.should.deepEqual([1, 5, 6]);
    });
});
