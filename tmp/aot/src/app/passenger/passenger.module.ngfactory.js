/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '@angular/core';
import * as import1 from '../../../../app/passenger/passenger.module';
import * as import2 from '@angular/common';
import * as import3 from '@angular/forms';
import * as import4 from '../../../../app/shared/shared.module';
import * as import5 from '@angular/router';
import * as import6 from '../../../../app/passenger/passenger-search/passenger.service';
import * as import7 from '../../../../app/passenger/passenger-search/passenger.resolver';
import * as import8 from '../shared/structural/tooltip.component.ngfactory';
import * as import9 from './passenger.component.ngfactory';
import * as import10 from './passenger-search/passenger-search.component.ngfactory';
import * as import11 from './passenger-edit/passenger-edit.component.ngfactory';
import * as import12 from '../../../../app/passenger/passenger.component';
import * as import13 from '../../../../app/passenger/passenger-search/passenger-search.component';
import * as import14 from '../../../../app/passenger/passenger-edit/passenger-edit.component';
import * as import15 from '../../../../app/shared/deactivation/leave-component-guard';
import * as import16 from '@angular/http';
import * as import17 from '../../../../app/app.tokens';
var PassengerModuleInjector = (function (_super) {
    __extends(PassengerModuleInjector, _super);
    function PassengerModuleInjector(parent) {
        return _super.call(this, parent, [
            import8.TooltipComponentNgFactory,
            import9.PassengerComponentNgFactory,
            import10.PassengerSearchComponentNgFactory,
            import11.PassengerEditComponentNgFactory
        ], []) || this;
    }
    Object.defineProperty(PassengerModuleInjector.prototype, "_NgLocalization_7", {
        get: function () {
            if ((this.__NgLocalization_7 == null)) {
                (this.__NgLocalization_7 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID)));
            }
            return this.__NgLocalization_7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PassengerModuleInjector.prototype, "_\u0275i_8", {
        get: function () {
            if ((this.__ɵi_8 == null)) {
                (this.__ɵi_8 = new import3.ɵi());
            }
            return this.__ɵi_8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PassengerModuleInjector.prototype, "_FormBuilder_9", {
        get: function () {
            if ((this.__FormBuilder_9 == null)) {
                (this.__FormBuilder_9 = new import3.FormBuilder());
            }
            return this.__FormBuilder_9;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PassengerModuleInjector.prototype, "_ROUTES_10", {
        get: function () {
            if ((this.__ROUTES_10 == null)) {
                (this.__ROUTES_10 = [[{
                            path: 'passenger',
                            component: import12.PassengerComponent,
                            children: [
                                {
                                    path: '',
                                    redirectTo: 'passenger-search',
                                    pathMatch: 'full'
                                },
                                {
                                    path: 'passenger-search',
                                    component: import13.PassengerSearchComponent
                                },
                                {
                                    path: 'passenger-edit/:id',
                                    component: import14.PassengerEditComponent,
                                    canDeactivate: [import15.LeaveComponentGuard],
                                    data: { restricted: true },
                                    resolve: { passenger: import7.PassengerResolver }
                                }
                            ]
                        }
                    ]]);
            }
            return this.__ROUTES_10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PassengerModuleInjector.prototype, "_PassengerService_11", {
        get: function () {
            if ((this.__PassengerService_11 == null)) {
                (this.__PassengerService_11 = new import6.PassengerService(this.parent.get(import16.Http), this.parent.get(import17.BASE_URL)));
            }
            return this.__PassengerService_11;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PassengerModuleInjector.prototype, "_PassengerResolver_12", {
        get: function () {
            if ((this.__PassengerResolver_12 == null)) {
                (this.__PassengerResolver_12 = new import7.PassengerResolver(this._PassengerService_11));
            }
            return this.__PassengerResolver_12;
        },
        enumerable: true,
        configurable: true
    });
    PassengerModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ɵba_1 = new import3.ɵba();
        this._FormsModule_2 = new import3.FormsModule();
        this._ReactiveFormsModule_3 = new import3.ReactiveFormsModule();
        this._SharedModule_4 = new import4.SharedModule();
        this._RouterModule_5 = new import5.RouterModule(this.parent.get(import5.ɵa, null));
        this._PassengerModule_6 = new import1.PassengerModule();
        return this._PassengerModule_6;
    };
    PassengerModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ɵba)) {
            return this._ɵba_1;
        }
        if ((token === import3.FormsModule)) {
            return this._FormsModule_2;
        }
        if ((token === import3.ReactiveFormsModule)) {
            return this._ReactiveFormsModule_3;
        }
        if ((token === import4.SharedModule)) {
            return this._SharedModule_4;
        }
        if ((token === import5.RouterModule)) {
            return this._RouterModule_5;
        }
        if ((token === import1.PassengerModule)) {
            return this._PassengerModule_6;
        }
        if ((token === import2.NgLocalization)) {
            return this._NgLocalization_7;
        }
        if ((token === import3.ɵi)) {
            return this._ɵi_8;
        }
        if ((token === import3.FormBuilder)) {
            return this._FormBuilder_9;
        }
        if ((token === import5.ROUTES)) {
            return this._ROUTES_10;
        }
        if ((token === import6.PassengerService)) {
            return this._PassengerService_11;
        }
        if ((token === import7.PassengerResolver)) {
            return this._PassengerResolver_12;
        }
        return notFoundResult;
    };
    PassengerModuleInjector.prototype.destroyInternal = function () {
    };
    return PassengerModuleInjector;
}(import0.ɵNgModuleInjector));
export var PassengerModuleNgFactory = new import0.NgModuleFactory(PassengerModuleInjector, import1.PassengerModule);
