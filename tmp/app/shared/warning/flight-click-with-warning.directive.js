import { Directive, Output, EventEmitter, Input, HostListener, ElementRef, Renderer } from '@angular/core';
var FlightClickWithWarningDirective = (function () {
    function FlightClickWithWarningDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.warning = 'Are you sure?';
        this.flightClickWithWarning = new EventEmitter();
    }
    FlightClickWithWarningDirective.prototype.ngOnInit = function () {
        // Warnung: Direkter DOM-Zugriff!
        // this.elementRef.nativeElement.setAttribute('class', 'btn btn-danger');
        // Indirekter DOM-Zugriff über Renderer
        this.renderer.setElementAttribute(this.elementRef.nativeElement, 'class', 'btn btn-danger');
    };
    FlightClickWithWarningDirective.prototype.handleClick = function ($event) {
        console.log('handleClick', $event);
        if (confirm(this.warning)) {
            this.flightClickWithWarning.emit();
        }
    };
    return FlightClickWithWarningDirective;
}());
export { FlightClickWithWarningDirective };
/*
@HostListener('click', ['$event', '$event.shiftKey'])
handleClick($event, shiftKey): void {
    console.log('handleClick', $event);
    if (shiftKey || confirm(this.warning)) {
        this.flightClickWithWarning.emit();
    }
}
*/
FlightClickWithWarningDirective.decorators = [
    { type: Directive, args: [{
                selector: '[flightClickWithWarning]'
            },] },
];
/** @nocollapse */
FlightClickWithWarningDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
]; };
FlightClickWithWarningDirective.propDecorators = {
    'warning': [{ type: Input },],
    'flightClickWithWarning': [{ type: Output },],
    'handleClick': [{ type: HostListener, args: ['click', ['$event'],] },],
};
