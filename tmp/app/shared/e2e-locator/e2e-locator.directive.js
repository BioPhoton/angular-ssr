import { Directive, Input, ElementRef, Renderer } from '@angular/core';
var E2eLocatorDirective = (function () {
    function E2eLocatorDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    Object.defineProperty(E2eLocatorDirective.prototype, "flightE2eLocator", {
        set: function (flightE2eLocator) {
            this.renderer.setElementAttribute(this.el.nativeElement, 'flightE2eLocator', flightE2eLocator);
        },
        enumerable: true,
        configurable: true
    });
    return E2eLocatorDirective;
}());
export { E2eLocatorDirective };
E2eLocatorDirective.decorators = [
    { type: Directive, args: [{ selector: '[flightE2eLocator]' },] },
];
/** @nocollapse */
E2eLocatorDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
]; };
E2eLocatorDirective.propDecorators = {
    'flightE2eLocator': [{ type: Input },],
};
