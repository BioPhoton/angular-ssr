import { Component } from '@angular/core';
var TooltipComponent = (function () {
    function TooltipComponent() {
    }
    return TooltipComponent;
}());
export { TooltipComponent };
TooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'flight-tooltip',
                template: "\n        <div class=\"tooltip-bg\">\n            <b>Tipp:</b>\n            <ng-content></ng-content>\n        </div>\n    ",
                styles: ["\n        .tooltip-bg {\n            background-color: yellow; \n            border: solid 2px darkkhaki\n        }\n    "]
            },] },
];
/** @nocollapse */
TooltipComponent.ctorParameters = function () { return []; };
