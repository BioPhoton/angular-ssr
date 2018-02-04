import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.info = 'Welt';
        this.showWaitInfo = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.initNgTranslate();
        this.initRouterEvents();
        this.initAuth();
    };
    AppComponent.prototype.initNgTranslate = function () {
        /*
        this.translate.addLangs(['en', 'de']);
        this.translate.setDefaultLang('de');
        this.translate.use('de');
        */
    };
    AppComponent.prototype.initRouterEvents = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof NavigationStart) {
                _this.showWaitInfo = true;
            }
            if (event instanceof NavigationEnd
                || event instanceof NavigationCancel
                || event instanceof NavigationError) {
                _this.showWaitInfo = false;
            }
        });
    };
    AppComponent.prototype.initAuth = function () {
    };
    return AppComponent;
}());
export { AppComponent };
AppComponent.decorators = [
    { type: Component, args: [{
                selector: 'flight-app',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            },] },
];
/** @nocollapse */
AppComponent.ctorParameters = function () { return [
    { type: Router, },
]; };
