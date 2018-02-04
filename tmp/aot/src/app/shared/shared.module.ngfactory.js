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
import * as import1 from '../../../../app/shared/shared.module';
import * as import2 from '@angular/forms';
import * as import3 from '@angular/common';
import * as import4 from './structural/tooltip.component.ngfactory';
var SharedModuleInjector = (function (_super) {
    __extends(SharedModuleInjector, _super);
    function SharedModuleInjector(parent) {
        return _super.call(this, parent, [import4.TooltipComponentNgFactory], []) || this;
    }
    Object.defineProperty(SharedModuleInjector.prototype, "_\u0275i_4", {
        get: function () {
            if ((this.__ɵi_4 == null)) {
                (this.__ɵi_4 = new import2.ɵi());
            }
            return this.__ɵi_4;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SharedModuleInjector.prototype, "_NgLocalization_5", {
        get: function () {
            if ((this.__NgLocalization_5 == null)) {
                (this.__NgLocalization_5 = new import3.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID)));
            }
            return this.__NgLocalization_5;
        },
        enumerable: true,
        configurable: true
    });
    SharedModuleInjector.prototype.createInternal = function () {
        this._ɵba_0 = new import2.ɵba();
        this._FormsModule_1 = new import2.FormsModule();
        this._CommonModule_2 = new import3.CommonModule();
        this._SharedModule_3 = new import1.SharedModule();
        return this._SharedModule_3;
    };
    SharedModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.ɵba)) {
            return this._ɵba_0;
        }
        if ((token === import2.FormsModule)) {
            return this._FormsModule_1;
        }
        if ((token === import3.CommonModule)) {
            return this._CommonModule_2;
        }
        if ((token === import1.SharedModule)) {
            return this._SharedModule_3;
        }
        if ((token === import2.ɵi)) {
            return this._ɵi_4;
        }
        if ((token === import3.NgLocalization)) {
            return this._NgLocalization_5;
        }
        return notFoundResult;
    };
    SharedModuleInjector.prototype.destroyInternal = function () {
    };
    return SharedModuleInjector;
}(import0.ɵNgModuleInjector));
export var SharedModuleNgFactory = new import0.NgModuleFactory(SharedModuleInjector, import1.SharedModule);
