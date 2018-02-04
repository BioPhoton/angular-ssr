import { Directive, ViewContainerRef, Input, HostListener, Renderer } from '@angular/core';
var TooltipDirective = (function () {
    function TooltipDirective(viewContainer, renderer) {
        this.viewContainer = viewContainer;
        this.renderer = renderer;
    }
    TooltipDirective.prototype.handleMouseover = function ($event) {
        this.embeddedViewRef = this.viewContainer.createEmbeddedView(this.template);
        var nativeElement = this.embeddedViewRef.rootNodes.find(function (n) { return n.nodeType === 1; });
        if (!nativeElement) {
            return;
        }
        var left = $event.target.offsetLeft + 'px';
        var top = ($event.target.offsetTop + $event.target.offsetHeight + 5) + 'px';
        this.renderer.setElementStyle(nativeElement, 'position', 'absolute');
        this.renderer.setElementStyle(nativeElement, 'left', left);
        this.renderer.setElementStyle(nativeElement, 'top', top);
        this.renderer.setElementStyle(nativeElement, 'width', '200px');
    };
    TooltipDirective.prototype.handleMouseout = function () {
        this.embeddedViewRef.destroy();
    };
    return TooltipDirective;
}());
export { TooltipDirective };
TooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[flightTooltip]'
            },] },
];
/** @nocollapse */
TooltipDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
    { type: Renderer, },
]; };
TooltipDirective.propDecorators = {
    'template': [{ type: Input, args: ['flightTooltip',] },],
    'handleMouseover': [{ type: HostListener, args: ['mouseover', ['$event'],] },],
    'handleMouseout': [{ type: HostListener, args: ['mouseout',] },],
};
