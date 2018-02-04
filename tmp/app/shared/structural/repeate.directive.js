import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
var RepeateDirective = (function () {
    function RepeateDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(RepeateDirective.prototype, "flightRepeateOf", {
        set: function (items) {
            this.viewContainer.clear();
            var i = 0;
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                i++;
                var context = {
                    $implicit: item,
                    index: i - 1,
                    odd: (i % 2 === 1)
                };
                this.viewContainer
                    .createEmbeddedView(this.templateRef, context);
            }
        },
        enumerable: true,
        configurable: true
    });
    return RepeateDirective;
}());
export { RepeateDirective };
RepeateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[flightRepeate]'
            },] },
];
/** @nocollapse */
RepeateDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
]; };
RepeateDirective.propDecorators = {
    'flightRepeateOf': [{ type: Input },],
};
