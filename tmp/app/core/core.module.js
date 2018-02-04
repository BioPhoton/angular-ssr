import { NgModule } from '@angular/core';
import { LeaveComponentGuard } from '../shared/deactivation/leave-component-guard';
import { CustomPreloadingStrategy } from '../shared/preload/custom-preloading.strategy';
var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
export { CoreModule };
CoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [],
                providers: [
                    LeaveComponentGuard,
                    CustomPreloadingStrategy,
                ],
                exports: []
            },] },
];
/** @nocollapse */
CoreModule.ctorParameters = function () { return []; };
