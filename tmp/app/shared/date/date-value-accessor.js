import { Directive, Renderer, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var DateValueAccessorDirective = (function () {
    function DateValueAccessorDirective(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    DateValueAccessorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DateValueAccessorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    DateValueAccessorDirective.prototype.blur = function () {
        this.onTouched();
    };
    // Parser: View --> Ctrl
    DateValueAccessorDirective.prototype.input = function (value) {
        // Write back to model
        if (value) {
            value = value.split(/\./);
            value = value[2] + '-' + value[1] + '-' + value[0];
        }
        this.onChange(value);
    };
    // Formatter: Ctrl --> View
    DateValueAccessorDirective.prototype.writeValue = function (value) {
        // Write to view
        if (value) {
            var date = new Date(value);
            value =
                date.getDate() + '.'
                    + (date.getMonth() + 1) + '.'
                    + date.getFullYear();
        }
        var normalizedValue = (value) ? value : '';
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    };
    return DateValueAccessorDirective;
}());
export { DateValueAccessorDirective };
DateValueAccessorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[flightDate]',
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return DateValueAccessorDirective; }),
                        multi: true
                    }]
            },] },
];
/** @nocollapse */
DateValueAccessorDirective.ctorParameters = function () { return [
    { type: Renderer, },
    { type: ElementRef, },
]; };
