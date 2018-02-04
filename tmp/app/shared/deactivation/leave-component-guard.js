import { Injectable } from '@angular/core';
var LeaveComponentGuard = (function () {
    function LeaveComponentGuard() {
    }
    LeaveComponentGuard.prototype.canDeactivate = function (component, route, state) {
        return component.canDeactivate();
    };
    return LeaveComponentGuard;
}());
export { LeaveComponentGuard };
LeaveComponentGuard.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LeaveComponentGuard.ctorParameters = function () { return []; };
