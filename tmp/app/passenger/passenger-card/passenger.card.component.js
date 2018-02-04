import { Component, EventEmitter, Input, Output } from '@angular/core';
var PassengerCardComponent = (function () {
    function PassengerCardComponent() {
        this.selectedItemChange = new EventEmitter();
    }
    PassengerCardComponent.prototype.isSelected = function () {
        if (this.selectedItem) {
            return this.selectedItem === this.item ? 'yes' : 'no';
        }
    };
    PassengerCardComponent.prototype.select = function () {
        this.selectedItemChange.emit(this.item);
    };
    return PassengerCardComponent;
}());
export { PassengerCardComponent };
PassengerCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'passenger-card',
                templateUrl: './passenger-card.component.html'
            },] },
];
/** @nocollapse */
PassengerCardComponent.ctorParameters = function () { return []; };
PassengerCardComponent.propDecorators = {
    'item': [{ type: Input },],
    'selectedItem': [{ type: Input },],
    'selectedItemChange': [{ type: Output },],
};
