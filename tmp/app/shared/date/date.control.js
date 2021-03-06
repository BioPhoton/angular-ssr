import { Component } from '@angular/core';
import { NgControl } from '@angular/forms';
var DateControlComponent = (function () {
    function DateControlComponent(c) {
        this.c = c;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        c.valueAccessor = this;
    }
    DateControlComponent.prototype.writeValue = function (value) {
        this.splitDate(value);
    };
    DateControlComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DateControlComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    DateControlComponent.prototype.splitDate = function (dateString) {
        var date = new Date(dateString);
        this.day = date.getDate();
        this.month = date.getMonth() + 1;
        this.year = date.getFullYear();
        this.hour = date.getHours();
        this.minute = date.getMinutes();
    };
    DateControlComponent.prototype.apply = function () {
        var date = new Date(this.year, this.month - 1, this.day, this.hour, this.minute);
        this.onChange(date.toISOString());
        this.onTouched();
    };
    return DateControlComponent;
}());
export { DateControlComponent };
DateControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'flight-date-control',
                templateUrl: './date.control.html'
            },] },
];
/** @nocollapse */
DateControlComponent.ctorParameters = function () { return [
    { type: NgControl, },
]; };
