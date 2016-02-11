'use strict';

var isSuperset = function (subset, superset) {
    var isNonNullObj = function (sset) {
        return sset === null || typeof sset !== 'object';
    };

    if (isNonNullObj(superset) || isNonNullObj(subset)) {
        return false;
    }

    for (var name in subset) {
        if (subset.hasOwnProperty(name)) {
            if (superset[name] !== subset[name]) {
                return false;
            }
        }
    }
    return true;
};

module.exports = {
    isSuperset: isSuperset
};
