import { Component, Input } from '@angular/core';
var ValidationErrorsComponent = (function () {
    function ValidationErrorsComponent() {
    }
    return ValidationErrorsComponent;
}());
export { ValidationErrorsComponent };
ValidationErrorsComponent.decorators = [
    { type: Component, args: [{
                selector: 'flight-validation-errors',
                template: "\n        <div *ngIf=\"errors && errors.required\">\n            This field is required\n        </div>\n        <div *ngIf=\"errors && errors.minlength\">\n            Please enter at least {{ errors.minlength.expected }} characters\n        </div>\n        <div *ngIf=\"errors && errors.city\">\n            This city is now allowed\n        </div>\n    "
            },] },
];
/** @nocollapse */
ValidationErrorsComponent.ctorParameters = function () { return []; };
ValidationErrorsComponent.propDecorators = {
    'errors': [{ type: Input },],
};
