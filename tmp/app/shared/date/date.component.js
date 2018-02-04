import { Component, Input, EventEmitter, Output } from '@angular/core';
var DateComponent = (function () {
    function DateComponent() {
        this.dateChange = new EventEmitter();
        console.debug('date in constructor', this.date);
    }
    DateComponent.prototype.ngOnInit = function () {
        console.debug('date in ngOnInit', this.date);
    };
    DateComponent.prototype.ngOnChanges = function (change) {
        console.debug('date in ngOnChanges', this.date);
        // if(change.date) { ... }
        var date = new Date(this.date);
        this.day = date.getDate();
        this.month = date.getMonth() + 1;
        this.year = date.getFullYear();
        this.hour = date.getHours();
        this.minute = date.getMinutes();
    };
    DateComponent.prototype.apply = function () {
        var date = new Date(this.year, this.month - 1, this.day, this.hour, this.minute);
        this.dateChange.next(date.toISOString());
    };
    return DateComponent;
}());
export { DateComponent };
DateComponent.decorators = [
    { type: Component, args: [{
                selector: 'flight-date-component',
                templateUrl: './date.component.html'
            },] },
];
/** @nocollapse */
DateComponent.ctorParameters = function () { return []; };
DateComponent.propDecorators = {
    'date': [{ type: Input },],
    'dateChange': [{ type: Output },],
};
