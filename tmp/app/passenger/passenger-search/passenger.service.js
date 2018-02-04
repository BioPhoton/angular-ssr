import { Injectable, Inject } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { BASE_URL } from '../../app.tokens';
var PassengerService = (function () {
    function PassengerService(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.passengers = [];
    }
    PassengerService.prototype.findById = function (id) {
        // let url = this.baseUrl + '/api/securepassenger';
        // let url = '/data/passenger.json';
        var url = this.baseUrl + '/api/passenger';
        var headers = new Headers();
        headers.set('Accept', 'text/json');
        var search = new URLSearchParams();
        search.set('id', id);
        return this
            .http
            .get(url, { headers: headers, search: search });
        //.map(resp => resp.json());
    };
    PassengerService.prototype.find = function (name) {
        var _this = this;
        var url = this.baseUrl + '/api/passenger';
        // let url = this.baseUrl + '/api/securepassenger';
        // let url = '/data/passengers.json';
        var headers = new Headers();
        headers.set('Accept', 'text/json');
        var search = new URLSearchParams();
        search.set('name', name);
        this
            .http
            .get(url, { headers: headers, search: search })
            .subscribe(function (passengers) {
            _this.passengers = passengers.json();
        }, function (err) {
            console.warn(err);
        });
    };
    return PassengerService;
}());
export { PassengerService };
PassengerService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
PassengerService.ctorParameters = function () { return [
    { type: Http, },
    { type: undefined, decorators: [{ type: Inject, args: [BASE_URL,] },] },
]; };
