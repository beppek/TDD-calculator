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

Ratio.prototype.meters = function(unit) {
    switch (unit) {
        case 'km':
            return 0.001;
        case 'miles':
            return 0.000621371192;
        case 'yards':
            return 1.0936133;
        case 'feet':
            return 3.280839895;
    }
};

Ratio.prototype.yards = function(unit) {
    switch (unit) {
        case 'km':
            return 0.0009144;
        case 'miles':
            return 0.000568;
        case 'meters':
            return 0.9144;
        case 'feet':
            return 3;
    }
};

Ratio.prototype.feet = function(unit) {
    switch (unit) {
        case 'km':
            return 0.0003048;
        case 'miles':
            return 0.000189394;
        case 'meters':
            return 0.9144;
        case 'yards':
            return 3;
    }
};

module.exports = Ratio;