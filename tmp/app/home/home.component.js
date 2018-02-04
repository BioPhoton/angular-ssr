import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnvService } from '../shared/env/env.service';
var HomeComponent = (function () {
    function HomeComponent(route, envService) {
        this.route = route;
        this.envService = envService;
        this.env = envService.env;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.needLogin = (p['needLogin'] === 'true');
        });
    };
    return HomeComponent;
}());
export { HomeComponent };
HomeComponent.decorators = [
    { type: Component, args: [{
                templateUrl: './home.component.html'
            },] },
];
/** @nocollapse */
HomeComponent.ctorParameters = function () { return [
    { type: ActivatedRoute, },
    { type: EnvService, },
]; };
