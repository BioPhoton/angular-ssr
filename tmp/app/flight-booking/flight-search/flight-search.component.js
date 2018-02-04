import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from './flight.service';
import { EnvService } from '../../shared/env/env.service';
var FlightSearchComponent = (function () {
    function FlightSearchComponent(flightService, route, envService) {
        this.flightService = flightService;
        this.route = route;
        this.envService = envService;
        this.from = 'Hamburg';
        this.to = 'Graz';
        this.date = (new Date()).toISOString();
        this.env = envService.env;
        /*
        route.queryParams.subscribe((p) => {
            // do sth with p
        });
        */
    }
    FlightSearchComponent.prototype.ngOnInit = function () {
        this.search();
    };
    FlightSearchComponent.prototype.delay = function () {
        this.flightService.delay();
    };
    Object.defineProperty(FlightSearchComponent.prototype, "flights", {
        get: function () {
            return this.flightService.flights;
        },
        enumerable: true,
        configurable: true
    });
    FlightSearchComponent.prototype.select = function (f) {
        this.selectedFlight = f;
    };
    FlightSearchComponent.prototype.search = function () {
        this.flightService
            .find(this.from, this.to);
        // .map(function(resp) { return resp.json() })
    };
    FlightSearchComponent.prototype.disableButton = function (event) {
        console.log(event);
    };
    return FlightSearchComponent;
}());
export { FlightSearchComponent };
FlightSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'flight-search',
                templateUrl: './flight-search.component.html',
                styleUrls: ['./flight-search.component.css']
            },] },
];
/** @nocollapse */
FlightSearchComponent.ctorParameters = function () { return [
    { type: FlightService, },
    { type: ActivatedRoute, },
    { type: EnvService, },
]; };
