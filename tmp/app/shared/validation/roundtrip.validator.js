import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
var RoundTripDirective = (function () {
    function RoundTripDirective() {
    }
    RoundTripDirective.prototype.validate = function (control) {
        var formGroup = control;
        var fromCtrl = formGroup.controls['from'];
        var toCtrl = formGroup.controls['to'];
        if (!fromCtrl || !toCtrl) {
            return {};
        }
        var from = fromCtrl.value;
        var to = toCtrl.value;
        if (from === to) {
            return {
                'round-trip': {
                    city: from
                }
            };
        }
        return {};
    };
    return RoundTripDirective;
}());
export { RoundTripDirective };
RoundTripDirective.decorators = [
    { type: Directive, args: [{
                selector: '[flightRoundTrip]',
                providers: [{ provide: NG_VALIDATORS, useExisting: RoundTripDirective, multi: true }]
            },] },
];
/** @nocollapse */
RoundTripDirective.ctorParameters = function () { return []; };
