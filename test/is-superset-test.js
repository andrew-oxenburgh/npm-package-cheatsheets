'use strict';

var should = require('should');

var tst = require('../src/is-superset').isSuperset;


/*

An object may be returned with superfluous properties. I want to make sure all of the properties in a creator object exist in the created object

 */

describe('i want a method to check one Object has all the properties of another one.', function () {
    it('sets are equal', function () {
        tst({}, {}).should.be.True();
        tst({w:1}, {w:1}).should.be.True();
    });

    it('extra properties are ignored', function () {
        tst({}, {w:2}).should.be.True();
        tst({w:1}, {w:1, x:7}).should.be.True();
    });

    it('errors', function () {
        tst({w:1}, {w:'1'}).should.be.False('different types an error');
        tst({w:1}, {w:2}).should.be.False('different values should be an error');
        tst({w:1}, {x:7}).should.be.False('same number of args, same value, different key');
    });

    it('edge cases', function () {
        tst(null, {}).should.be.False();
        tst({}, null).should.be.False();
        tst(null, null).should.be.False();
        tst('s', 's').should.be.False();
        tst(1, 1).should.be.False();
    });
});
