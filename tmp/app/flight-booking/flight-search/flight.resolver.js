import { Observable } from 'rxjs/Observable';
import { FlightService } from './flight.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
var FlightResolver = (function () {
    function FlightResolver(flightService) {
        this.flightService = flightService;
    }
    FlightResolver.prototype.resolve = function (route, state) {
        var id = route.params['id'];
        if (id == '0') {
            return Observable.of(null);
        }
        return this.flightService.findById(id);
    };
    return FlightResolver;
}());
export { FlightResolver };
FlightResolver.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FlightResolver.ctorParameters = function () { return [
    { type: FlightService, },
]; };
