import { Directive, ViewContainerRef, Input, HostListener, Renderer, ComponentFactoryResolver, Injector } from '@angular/core';
import { TooltipComponent } from './tooltip.component';
var Tooltip2Directive = (function () {
    function Tooltip2Directive(viewContainer, renderer, injector, componentFactoryResolver) {
        this.viewContainer = viewContainer;
        this.renderer = renderer;
        this.injector = injector;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    Tooltip2Directive.prototype.handleMouseover = function ($event) {
        var compFactory = this.componentFactoryResolver.resolveComponentFactory(TooltipComponent);
        var textNode = document.createTextNode(this.message);
        this.componentRef = this.viewContainer.createComponent(compFactory, null, this.injector, [[textNode]]);
        var nativeElement = this.componentRef.location.nativeElement;
        var left = $event.target.offsetLeft + 'px';
        var top = ($event.target.offsetTop + $event.target.offsetHeight + 5) + 'px';
        this.renderer.setElementStyle(nativeElement, 'position', 'absolute');
        this.renderer.setElementStyle(nativeElement, 'left', left);
        this.renderer.setElementStyle(nativeElement, 'top', top);
        this.renderer.setElementStyle(nativeElement, 'width', '200px');
    };
    Tooltip2Directive.prototype.handleMouseout = function () {
        this.componentRef.destroy();
    };
    return Tooltip2Directive;
}());
export { Tooltip2Directive };
Tooltip2Directive.decorators = [
    { type: Directive, args: [{
                selector: '[flightTooltip2]'
            },] },
];
/** @nocollapse */
Tooltip2Directive.ctorParameters = function () { return [
    { type: ViewContainerRef, },
    { type: Renderer, },
    { type: Injector, },
    { type: ComponentFactoryResolver, },
]; };
Tooltip2Directive.propDecorators = {
    'message': [{ type: Input, args: ['flightTooltip2',] },],
    'handleMouseover': [{ type: HostListener, args: ['mouseover', ['$event'],] },],
    'handleMouseout': [{ type: HostListener, args: ['mouseout',] },],
};
