/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
import * as import0 from './flight-search.component.css.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '../flight-card/flight.card.component.ngfactory';
import * as import3 from '../../../../../app/flight-booking/flight-card/flight.card.component';
import * as import4 from '@angular/router';
import * as import5 from '@angular/common';
import * as import6 from '../../../../../app/flight-booking/flight-search/flight-search.component';
import * as import7 from '@angular/forms';
import * as import8 from '../../../../../app/shared/validation/roundtrip.validator';
import * as import9 from '../../../../../app/shared/e2e-locator/e2e-locator.directive';
import * as import10 from '../../../../../app/flight-booking/flight-search/flight.service';
import * as import11 from '../../../../../app/shared/env/env.service';
var styles_FlightSearchComponent = [import0.styles];
export var RenderType_FlightSearchComponent = import1.ɵcrt({
    encapsulation: 0,
    styles: styles_FlightSearchComponent,
    data: {}
});
function View_FlightSearchComponent_1() {
    return import1.ɵvid(0, [
        import1.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null),
        import1.ɵted(null, ['\n        Round trips arn\'t allowed.\n    '])
    ], null, null);
}
function View_FlightSearchComponent_2() {
    return import1.ɵvid(0, [
        import1.ɵeld(0, null, null, 10, 'div', [[
                'class',
                'col-sm-6 col-md-4 col-lg-3 '
            ]
        ], null, null, null, null, null),
        import1.ɵted(null, ['\n        ']),
        import1.ɵeld(0, null, null, 7, 'flight-card', [], null, [[
                null,
                'selectedItemChange'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('selectedItemChange' === eventName)) {
                var pd_0 = ((comp.selectedFlight = $event) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, import2.View_FlightCardComponent_0, import2.RenderType_FlightCardComponent),
        import1.ɵdid(24576, null, 0, import3.FlightCardComponent, [], {
            item: [
                0,
                'item'
            ],
            selectedItem: [
                1,
                'selectedItem'
            ]
        }, { selectedItemChange: 'selectedItemChange' }),
        import1.ɵted(0, ['\n\n            ']),
        import1.ɵeld(0, null, 0, 3, 'a', [[
                'class',
                'btn btn-default'
            ]
        ], [
            [
                0,
                'target',
                0
            ],
            [
                3,
                'href',
                4
            ]
        ], [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (import1.ɵnov(view, 6).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import1.ɵdid(335872, null, 0, import4.RouterLinkWithHref, [
            import4.Router,
            import4.ActivatedRoute,
            import5.LocationStrategy
        ], { routerLink: [
                0,
                'routerLink'
            ]
        }, null),
        import1.ɵpad(2),
        import1.ɵted(null, ['Edit']),
        import1.ɵted(0, ['\n\n        ']),
        import1.ɵted(null, ['\n\n    '])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = view.context.$implicit;
        var currVal_1 = comp.selectedFlight;
        check(view, 3, 0, currVal_0, currVal_1);
        var currVal_2 = check(view, 7, 0, '../flight-edit', view.context.$implicit.id);
        check(view, 6, 0, currVal_2);
    }, function (check, view) {
        var comp = view.component;
        var currVal_0 = import1.ɵnov(view, 6).target;
        var currVal_1 = import1.ɵnov(view, 6).href;
        check(view, 5, 0, currVal_0, currVal_1);
    });
}
export function View_FlightSearchComponent_0() {
    return import1.ɵvid(0, [
        import1.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null),
        import1.ɵted(null, ['Search Flights']),
        import1.ɵted(null, ['\n\n']),
        import1.ɵeld(0, null, null, 49, 'form', [
            [
                'flightRoundTrip',
                ''
            ],
            [
                'novalidate',
                ''
            ]
        ], [
            [
                1,
                'ng-untouched'
            ],
            [
                1,
                'ng-touched'
            ],
            [
                1,
                'ng-pristine'
            ],
            [
                1,
                'ng-dirty'
            ],
            [
                1,
                'ng-valid'
            ],
            [
                1,
                'ng-invalid'
            ],
            [
                1,
                'ng-pending'
            ]
        ], [
            [
                null,
                'submit'
            ],
            [
                null,
                'reset'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('submit' === eventName)) {
                var pd_0 = (import1.ɵnov(view, 7).onSubmit($event) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            if (('reset' === eventName)) {
                var pd_1 = (import1.ɵnov(view, 7).onReset() !== false);
                allowDefault = (pd_1 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import1.ɵdid(8192, null, 0, import7.ɵbf, [], null, null),
        import1.ɵdid(8192, null, 0, import8.RoundTripDirective, [], null, null),
        import1.ɵprd(512, null, import7.NG_VALIDATORS, function (p0_0) {
            return [p0_0];
        }, [import8.RoundTripDirective]),
        import1.ɵdid(8192, [[
                'f',
                4
            ]
        ], 0, import7.NgForm, [
            [
                2,
                import7.NG_VALIDATORS
            ],
            [
                8,
                null
            ]
        ], null, null),
        import1.ɵprd(1024, null, import7.ControlContainer, null, [import7.NgForm]),
        import1.ɵdid(8192, null, 0, import7.NgControlStatusGroup, [import7.ControlContainer], null, null),
        import1.ɵted(null, ['\n\n    ']),
        import1.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null),
        import1.ɵted(null, [
            '\n        Env: ',
            '\n    '
        ]),
        import1.ɵted(null, ['\n\n    ']),
        import1.ɵand(8388608, null, null, 1, null, View_FlightSearchComponent_1),
        import1.ɵdid(8192, null, 0, import5.NgIf, [
            import1.ViewContainerRef,
            import1.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        import1.ɵted(null, ['\n\n    ']),
        import1.ɵeld(0, null, null, 11, 'div', [[
                'class',
                'form-group'
            ]
        ], null, null, null, null, null),
        import1.ɵted(null, ['\n        ']),
        import1.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null),
        import1.ɵted(null, ['From']),
        import1.ɵted(null, ['\n        ']),
        import1.ɵeld(0, null, null, 5, 'input', [
            [
                'class',
                'form-control'
            ],
            [
                'name',
                'from'
            ]
        ], [
            [
                1,
                'ng-untouched'
            ],
            [
                1,
                'ng-touched'
            ],
            [
                1,
                'ng-pristine'
            ],
            [
                1,
                'ng-dirty'
            ],
            [
                1,
                'ng-valid'
            ],
            [
                1,
                'ng-invalid'
            ],
            [
                1,
                'ng-pending'
            ]
        ], [
            [
                null,
                'ngModelChange'
            ],
            [
                null,
                'input'
            ],
            [
                null,
                'blur'
            ],
            [
                null,
                'compositionstart'
            ],
            [
                null,
                'compositionend'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('input' === eventName)) {
                var pd_0 = (import1.ɵnov(view, 23).onChange($event.target.value) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            if (('blur' === eventName)) {
                var pd_1 = (import1.ɵnov(view, 23).onTouched() !== false);
                allowDefault = (pd_1 && allowDefault);
            }
            if (('compositionstart' === eventName)) {
                var pd_2 = (import1.ɵnov(view, 25).compositionStart() !== false);
                allowDefault = (pd_2 && allowDefault);
            }
            if (('compositionend' === eventName)) {
                var pd_3 = (import1.ɵnov(view, 25).compositionEnd() !== false);
                allowDefault = (pd_3 && allowDefault);
            }
            if (('ngModelChange' === eventName)) {
                var pd_4 = ((comp.from = $event) !== false);
                allowDefault = (pd_4 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import1.ɵdid(8192, null, 0, import7.DefaultValueAccessor, [
            import1.Renderer,
            import1.ElementRef
        ], null, null),
        import1.ɵprd(512, null, import7.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import7.DefaultValueAccessor]),
        import1.ɵdid(335872, null, 0, import7.NgModel, [
            [
                2,
                import7.ControlContainer
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                2,
                import7.NG_VALUE_ACCESSOR
            ]
        ], {
            name: [
                0,
                'name'
            ],
            model: [
                1,
                'model'
            ]
        }, { update: 'ngModelChange' }),
        import1.ɵprd(1024, null, import7.NgControl, null, [import7.NgModel]),
        import1.ɵdid(8192, null, 0, import7.NgControlStatus, [import7.NgControl], null, null),
        import1.ɵted(null, ['\n    ']),
        import1.ɵted(null, ['\n\n    ']),
        import1.ɵeld(0, null, null, 12, 'div', [[
                'class',
                'form-group'
            ]
        ], null, null, null, null, null),
        import1.ɵted(null, ['\n        ']),
        import1.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null),
        import1.ɵted(null, ['To']),
        import1.ɵted(null, ['\n        ']),
        import1.ɵeld(0, null, null, 6, 'input', [
            [
                'class',
                'form-control'
            ],
            [
                'flightE2eLocator',
                'to'
            ],
            [
                'name',
                'to'
            ]
        ], [
            [
                1,
                'ng-untouched'
            ],
            [
                1,
                'ng-touched'
            ],
            [
                1,
                'ng-pristine'
            ],
            [
                1,
                'ng-dirty'
            ],
            [
                1,
                'ng-valid'
            ],
            [
                1,
                'ng-invalid'
            ],
            [
                1,
                'ng-pending'
            ]
        ], [
            [
                null,
                'ngModelChange'
            ],
            [
                null,
                'input'
            ],
            [
                null,
                'blur'
            ],
            [
                null,
                'compositionstart'
            ],
            [
                null,
                'compositionend'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('input' === eventName)) {
                var pd_0 = (import1.ɵnov(view, 36).onChange($event.target.value) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            if (('blur' === eventName)) {
                var pd_1 = (import1.ɵnov(view, 36).onTouched() !== false);
                allowDefault = (pd_1 && allowDefault);
            }
            if (('compositionstart' === eventName)) {
                var pd_2 = (import1.ɵnov(view, 38).compositionStart() !== false);
                allowDefault = (pd_2 && allowDefault);
            }
            if (('compositionend' === eventName)) {
                var pd_3 = (import1.ɵnov(view, 38).compositionEnd() !== false);
                allowDefault = (pd_3 && allowDefault);
            }
            if (('ngModelChange' === eventName)) {
                var pd_4 = ((comp.to = $event) !== false);
                allowDefault = (pd_4 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import1.ɵdid(8192, null, 0, import7.DefaultValueAccessor, [
            import1.Renderer,
            import1.ElementRef
        ], null, null),
        import1.ɵprd(512, null, import7.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import7.DefaultValueAccessor]),
        import1.ɵdid(335872, null, 0, import7.NgModel, [
            [
                2,
                import7.ControlContainer
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                2,
                import7.NG_VALUE_ACCESSOR
            ]
        ], {
            name: [
                0,
                'name'
            ],
            model: [
                1,
                'model'
            ]
        }, { update: 'ngModelChange' }),
        import1.ɵprd(1024, null, import7.NgControl, null, [import7.NgModel]),
        import1.ɵdid(8192, null, 0, import7.NgControlStatus, [import7.NgControl], null, null),
        import1.ɵdid(8192, null, 0, import9.E2eLocatorDirective, [
            import1.ElementRef,
            import1.Renderer
        ], { flightE2eLocator: [
                0,
                'flightE2eLocator'
            ]
        }, null),
        import1.ɵted(null, ['\n    ']),
        import1.ɵted(null, ['\n\n    ']),
        import1.ɵeld(0, null, null, 7, 'div', [[
                'class',
                'form-group'
            ]
        ], null, null, null, null, null),
        import1.ɵted(null, ['\n        ']),
        import1.ɵeld(0, null, null, 1, 'button', [
            [
                'class',
                'btn btn-primary'
            ],
            [
                'name',
                'btnSearch'
            ]
        ], [[
                3,
                'disabled',
                0
            ]
        ], [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (comp.search() !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import1.ɵted(null, ['Search\n        ']),
        import1.ɵted(null, ['\n      ']),
        import1.ɵeld(0, null, null, 1, 'button', [
            [
                'class',
                'btn btn-primary'
            ],
            [
                'name',
                'btnSearch'
            ]
        ], [[
                3,
                'disabled',
                0
            ]
        ], [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (comp.delay() !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import1.ɵted(null, ['Delay\n      ']),
        import1.ɵted(null, ['\n    ']),
        import1.ɵted(null, ['\n\n']),
        import1.ɵted(null, ['\n\n']),
        import1.ɵeld(0, null, null, 4, 'div', [[
                'class',
                'row'
            ]
        ], null, null, null, null, null),
        import1.ɵted(null, ['\n    ']),
        import1.ɵand(8388608, null, null, 1, null, View_FlightSearchComponent_2),
        import1.ɵdid(401408, null, 0, import5.NgForOf, [
            import1.ViewContainerRef,
            import1.TemplateRef,
            import1.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        import1.ɵted(null, ['\n']),
        import1.ɵted(null, ['\n\n\n']),
        import1.ɵeld(0, null, null, 5, 'div', [
            [
                'class',
                'row'
            ],
            [
                'style',
                'margin-top:40px'
            ]
        ], null, null, null, null, null),
        import1.ɵted(null, ['\n']),
        import1.ɵeld(0, null, null, 2, 'pre', [], null, null, null, null, null),
        import1.ɵted(null, [
            'Your Flight\n----------------------\n',
            '\n'
        ]),
        import1.ɵpid(0, import5.JsonPipe, []),
        import1.ɵted(null, ['\n']),
        import1.ɵted(null, ['\n'])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = ((import1.ɵnov(view, 7) == null) ? null : ((import1.ɵnov(view, 7).control == null) ? null : import1.ɵnov(view, 7).control.hasError('round-trip')));
        check(view, 15, 0, currVal_0);
        var currVal_1 = 'from';
        var currVal_2 = comp.from;
        check(view, 25, 0, currVal_1, currVal_2);
        var currVal_3 = 'to';
        var currVal_4 = comp.to;
        check(view, 38, 0, currVal_3, currVal_4);
        var currVal_5 = 'to';
        check(view, 41, 0, currVal_5);
        var currVal_6 = comp.flights;
        check(view, 57, 0, currVal_6);
    }, function (check, view) {
        var comp = view.component;
        var currVal_0 = import1.ɵnov(view, 9).ngClassUntouched;
        var currVal_1 = import1.ɵnov(view, 9).ngClassTouched;
        var currVal_2 = import1.ɵnov(view, 9).ngClassPristine;
        var currVal_3 = import1.ɵnov(view, 9).ngClassDirty;
        var currVal_4 = import1.ɵnov(view, 9).ngClassValid;
        var currVal_5 = import1.ɵnov(view, 9).ngClassInvalid;
        var currVal_6 = import1.ɵnov(view, 9).ngClassPending;
        check(view, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_7 = comp.env;
        check(view, 12, 0, currVal_7);
        var currVal_8 = import1.ɵnov(view, 27).ngClassUntouched;
        var currVal_9 = import1.ɵnov(view, 27).ngClassTouched;
        var currVal_10 = import1.ɵnov(view, 27).ngClassPristine;
        var currVal_11 = import1.ɵnov(view, 27).ngClassDirty;
        var currVal_12 = import1.ɵnov(view, 27).ngClassValid;
        var currVal_13 = import1.ɵnov(view, 27).ngClassInvalid;
        var currVal_14 = import1.ɵnov(view, 27).ngClassPending;
        check(view, 22, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);
        var currVal_15 = import1.ɵnov(view, 40).ngClassUntouched;
        var currVal_16 = import1.ɵnov(view, 40).ngClassTouched;
        var currVal_17 = import1.ɵnov(view, 40).ngClassPristine;
        var currVal_18 = import1.ɵnov(view, 40).ngClassDirty;
        var currVal_19 = import1.ɵnov(view, 40).ngClassValid;
        var currVal_20 = import1.ɵnov(view, 40).ngClassInvalid;
        var currVal_21 = import1.ɵnov(view, 40).ngClassPending;
        check(view, 35, 0, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21);
        var currVal_22 = !import1.ɵnov(view, 7).valid;
        check(view, 46, 0, currVal_22);
        var currVal_23 = !import1.ɵnov(view, 7).valid;
        check(view, 49, 0, currVal_23);
        var currVal_24 = import1.ɵunv(import1.ɵnov(view, 64).transform(comp.selectedFlight));
        check(view, 63, 0, currVal_24);
    });
}
var RenderType_FlightSearchComponent_Host = import1.ɵcrt({
    encapsulation: 2,
    styles: [],
    data: {}
});
function View_FlightSearchComponent_Host_0() {
    return import1.ɵvid(0, [
        import1.ɵeld(0, null, null, 1, 'flight-search', [], null, null, null, View_FlightSearchComponent_0, RenderType_FlightSearchComponent),
        import1.ɵdid(57344, null, 0, import6.FlightSearchComponent, [
            import10.FlightService,
            import4.ActivatedRoute,
            import11.EnvService
        ], null, null)
    ], function (check, view) {
        check(view, 1, 0);
    }, null);
}
export var FlightSearchComponentNgFactory = import1.ɵccf('flight-search', import6.FlightSearchComponent, View_FlightSearchComponent_Host_0);
