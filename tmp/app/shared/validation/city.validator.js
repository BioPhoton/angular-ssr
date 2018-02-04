import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
var CityValidatorDirective = (function () {
    function CityValidatorDirective() {
    }
    CityValidatorDirective.prototype.validate = function (c) {
        var formGroup = c.root;
        var otherValueCtrl = formGroup.controls['to'];
        if (!otherValueCtrl) {
            return {};
        }
        var otherValue = otherValueCtrl.value;
        if (otherValue === c.value) {
            return {
                city: 'rundflug'
            };
        }
        if (!this.city) {
            return {};
        }
        var allowed = this.city.split(','); // ['Graz', 'Hamburg', 'Wien', 'Frankfurt'];
        if (allowed.indexOf(c.value) === -1) {
            return {
                city: true
            };
        }
        return {};
    };
    return CityValidatorDirective;
}());
export { CityValidatorDirective };
CityValidatorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[flightCity]',
                providers: [
                    {
                        provide: NG_VALIDATORS,
                        useExisting: CityValidatorDirective,
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
CityValidatorDirective.ctorParameters = function () { return []; };
CityValidatorDirective.propDecorators = {
    'city': [{ type: Input },],
};
