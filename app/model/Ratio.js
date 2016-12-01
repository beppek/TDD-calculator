'use strict';

function Ratio() {

}

Ratio.prototype.km = function(unit) {
    switch (unit) {
        case 'miles':
            return 0.62137;
    }
};

module.exports = Ratio;