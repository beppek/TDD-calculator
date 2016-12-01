'use strict';

function Ratio() {

}

Ratio.prototype.km = function(unit) {
    switch (unit) {
        case 'miles':
            return 0.62137;
        case 'meters':
            return 1000;
        case 'yards':
            return 1093.6133;
        case 'feet':
            return 3280.8399;
    }
};

module.exports = Ratio;