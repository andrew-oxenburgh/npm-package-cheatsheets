'use strict';

var _ = require('lodash');
var should = require('should');


/*
 demo map reduce
 */

describe('#lodash', function () {
    it('#map, #orderBy', function () {
        var arr = [
            {
                a: 1
            },
            {
                a: 3,
                b: 1
            },
            {
                a: 2,
                c: 2
            },
            {
                d:2
            }];

        var res = _.map(arr, 'a');
        res = _.orderBy(res);

        res.should.deepEqual([1, 2, 3, undefined]);
    });

    it('#union', function () {
        var ar = [1, 2, undefined, 3, 3, 'a', 'b'];
        var s = [];

        var u = _.union(ar);
        s = _.orderBy(u);

        s.should.be.deepEqual([1, 2, 3, 'a', 'b', undefined]);

        s.splice(s.indexOf('a'), 1);
    });


});


