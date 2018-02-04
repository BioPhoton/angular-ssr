import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PassengerService } from './passenger.service';
var PassengerSearchComponent = (function () {
    function PassengerSearchComponent(passengerService, route) {
        this.passengerService = passengerService;
        this.name = "Doe";
        route.queryParams.subscribe(function (p) {
            // console.debug('queryParams', p);
        });
    }
    Object.defineProperty(PassengerSearchComponent.prototype, "passengers", {
        // cmp.passengers
        get: function () {
            return this.passengerService.passengers;
        },
        enumerable: true,
        configurable: true
    });
    PassengerSearchComponent.prototype.select = function (f) {
        this.selectedPassenger = f;
    };
    PassengerSearchComponent.prototype.search = function () {
        this.passengerService.find(this.name);
    };
    PassengerSearchComponent.prototype.disableButton = function (event) {
        console.log(event);
    };
    return PassengerSearchComponent;
}());
export { PassengerSearchComponent };
PassengerSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'passenger-search',
                templateUrl: './passenger-search.component.html',
                styleUrls: ['./passenger-search.component.css']
            },] },
];
/** @nocollapse */
PassengerSearchComponent.ctorParameters = function () { return [
    { type: PassengerService, },
    { type: ActivatedRoute, },
]; };
