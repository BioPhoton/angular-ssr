import { Component, EventEmitter, Input, Output } from '@angular/core';
var FlightCardComponent = (function () {
    function FlightCardComponent() {
        this.selectedItemChange = new EventEmitter();
    }
    FlightCardComponent.prototype.select = function () {
        this.selectedItemChange.emit(this.item);
    };
    FlightCardComponent.prototype.blink = function () {
        // Vorsicht: Direkter DOM-Zugriff !!!
        /*
        this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';
  
        this.zone.runOutsideAngular(() => {
          setTimeout(() => {
            this.element.nativeElement.firstChild.style.backgroundColor = 'lightsteelblue';
          }, 1000);
        });
        */
    };
    return FlightCardComponent;
}());
export { FlightCardComponent };
FlightCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'flight-card',
                templateUrl: './flight-card.component.html',
            },] },
];
/** @nocollapse */
FlightCardComponent.ctorParameters = function () { return []; };
FlightCardComponent.propDecorators = {
    'item': [{ type: Input },],
    'selectedItem': [{ type: Input },],
    'selectedItemChange': [{ type: Output },],
};
