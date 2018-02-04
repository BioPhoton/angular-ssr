import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';
var UnlessDirective = (function () {
    function UnlessDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(UnlessDirective.prototype, "flightUnless", {
        set: function (condition) {
            if (!condition) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    return UnlessDirective;
}());
export { UnlessDirective };
UnlessDirective.decorators = [
    { type: Directive, args: [{
                selector: '[flightUnless]'
            },] },
];
/** @nocollapse */
UnlessDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
]; };
UnlessDirective.propDecorators = {
    'flightUnless': [{ type: Input },],
};
