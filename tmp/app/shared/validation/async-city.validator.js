import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
var AsyncCityValidatorDirective = (function () {
    function AsyncCityValidatorDirective() {
    }
    AsyncCityValidatorDirective.prototype.validate = function (ctrl) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                if (ctrl.value === 'Graz' || ctrl.value === 'Hamburg') {
                    resolve({});
                    return;
                }
                resolve({ 'async-city': false });
            }, 100);
        });
    };
    return AsyncCityValidatorDirective;
}());
export { AsyncCityValidatorDirective };
AsyncCityValidatorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[flightAsyncCity]',
                providers: [
                    {
                        provide: NG_ASYNC_VALIDATORS,
                        useExisting: AsyncCityValidatorDirective,
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
AsyncCityValidatorDirective.ctorParameters = function () { return []; };
