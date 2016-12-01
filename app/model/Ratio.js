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

Ratio.prototype.miles = function(unit) {
    switch (unit) {
        case 'km':
            return 1.609344;
        case 'meters':
            return 1609.344;
        case 'yards':
            return 1760;
        case 'feet':
            return 5280;
    }
};

module.exports = Ratio;