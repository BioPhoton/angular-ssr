import { Observable } from 'rxjs/Observable';
import { PassengerService } from './passenger.service';
import { Injectable } from '@angular/core';
var PassengerResolver = (function () {
    function PassengerResolver(passengerService) {
        this.passengerService = passengerService;
    }
    PassengerResolver.prototype.resolve = function (route, state) {
        var id = route.params['id'];
        if (id == '0') {
            return Observable.of(null);
        }
        return this.passengerService.findById(id);
    };
    return PassengerResolver;
}());
export { PassengerResolver };
PassengerResolver.decorators = [
    { type: Injectable },
];
/** @nocollapse */
PassengerResolver.ctorParameters = function () { return [
    { type: PassengerService, },
]; };
