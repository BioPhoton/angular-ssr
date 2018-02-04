import { Pipe } from '@angular/core';
var CityPipe = (function () {
    function CityPipe() {
    }
    CityPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var fmt = args[0]; // short, long
        var short, long;
        switch (value) {
            case 'Graz':
                long = 'Flughafen Graz Thalerhof';
                short = 'GRZ';
                break;
            case 'Hamburg':
                long = 'Airport Hamburg Fuhlsbüttl Helmut Schmidt';
                short = 'HAM';
                break;
            default:
                long = short = 'ROM';
        }
        if (fmt === 'short') {
            return short;
        }
        return long;
    };
    return CityPipe;
}());
export { CityPipe };
CityPipe.decorators = [
    { type: Pipe, args: [{
                name: 'flightCity',
                pure: true
            },] },
];
/** @nocollapse */
CityPipe.ctorParameters = function () { return []; };
