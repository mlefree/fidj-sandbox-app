(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signin-signin-module"],{

/***/ "0m0A":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.module.ts ***!
  \*****************************************/
/*! exports provided: SigninPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageModule", function() { return SigninPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signin.page */ "Pyzx");
/* harmony import */ var _signin_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin-routing.module */ "o9hh");







let SigninPageModule = class SigninPageModule {
};
SigninPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _signin_routing_module__WEBPACK_IMPORTED_MODULE_6__["SigninPageRoutingModule"]
        ],
        declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_5__["SigninPage"]]
    })
], SigninPageModule);



/***/ }),

/***/ "Pyzx":
/*!***************************************!*\
  !*** ./src/app/signin/signin.page.ts ***!
  \***************************************/
/*! exports provided: SigninPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPage", function() { return SigninPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signin.page.html */ "wuB5");
/* harmony import */ var _signin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin.page.scss */ "QHoY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var fidj__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fidj */ "rN4z");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let SigninPage = class SigninPage {
    constructor(router, fidjService) {
        this.router = router;
        this.fidjService = fidjService;
        this.asUser = true;
    }
    ngOnInit() {
        if (this.fidjService.isLoggedIn()) {
            return this.router.navigateByUrl('/my');
        }
        else {
            console.log('not logged in');
        }
    }
    login(email, pwd) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loginError = '';
            try {
                yield this.fidjService.login(email, pwd);
                yield this.router.navigateByUrl('/my');
            }
            catch (err) {
                this.loginError = 'Bad credentials';
                console.error(JSON.stringify(err, Object.getOwnPropertyNames(err)));
            }
        });
    }
    loginAsDemo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.fidjService.loginAsDemo();
                yield this.router.navigateByUrl('/my');
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    profileChanged(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.asUser = !this.asUser;
        });
    }
    forgot(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!email) {
                this.loginError = 'Please set your email in order to receive the new password.';
            }
            try {
                yield this.fidjService.forgotPasswordRequest(email);
                this.loginError = '';
            }
            catch (e) {
                console.error(e);
            }
        });
    }
};
SigninPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: fidj__WEBPACK_IMPORTED_MODULE_4__["FidjService"] }
];
SigninPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signin',
        template: _raw_loader_signin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SigninPage);



/***/ }),

/***/ "QHoY":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  font-size: 2em;\n  color: #bb971f;\n}\n\nh2 {\n  font-size: 1.2em;\n  color: #adaaa2;\n}\n\nion-card-header {\n  white-space: normal;\n  text-align: center;\n}\n\nion-card-content {\n  text-align: center;\n}\n\nion-item-divider {\n  text-align: center;\n}\n\nion-item-divider ion-label {\n  width: 100%;\n}\n\nion-item-group {\n  white-space: normal;\n  text-align: center;\n  padding-top: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbmluL3NpZ25pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7QUFERjs7QUFHRTtFQUNFLFdBQUE7QUFESjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUZGIiwiZmlsZSI6InNyYy9hcHAvc2lnbmluL3NpZ25pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgY29sb3I6ICNiYjk3MWY7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgY29sb3I6ICNhZGFhYTI7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWl0ZW0tZGl2aWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBpb24tbGFiZWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbmlvbi1pdGVtLWdyb3VwIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMmVtO1xufVxuXG5cbiJdfQ== */");

/***/ }),

/***/ "o9hh":
/*!*************************************************!*\
  !*** ./src/app/signin/signin-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SigninPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageRoutingModule", function() { return SigninPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin.page */ "Pyzx");




const routes = [
    {
        path: '',
        component: _signin_page__WEBPACK_IMPORTED_MODULE_3__["SigninPage"],
    },
];
let SigninPageRoutingModule = class SigninPageRoutingModule {
};
SigninPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SigninPageRoutingModule);



/***/ }),

/***/ "wuB5":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <ion-grid>\n        <ion-row>\n            <ion-col size-md=\"8\" offset-md=\"2\" size-sm=\"12\">\n                <ion-card>\n                    <ion-card-header>\n                      <h1>sandbox-app </h1>\n                      <p>Welcome in FIDJ Test App</p>\n                    </ion-card-header>\n                    <ion-card-content>\n                        <form #heroForm=\"ngForm\" (ngSubmit)=\"login(userLoginEmail, userLoginPassword)\"\n                              (keyup.enter)=\"login(userLoginEmail, userLoginPassword)\">\n                            <ion-item [hidden]=\"!loginError\">\n                                <ion-label color=\"danger\">{{loginError}}</ion-label>\n                            </ion-item>\n                            <ion-item>\n                                <ion-input\n                                        id=\"userLoginEmail\"\n                                        type=\"text\" placeholder=\"valid.email@required.com\" required\n                                        [(ngModel)]=\"userLoginEmail\" name=\"userLoginEmail\"\n                                        pattern=\".{1,}@[_a-z0-9A-Z]+(\\.[a-z0-9A-Z]+)+\"\n                                ></ion-input>\n                            </ion-item>\n                            <ion-item>\n                                <ion-input\n                                        id=\"userLoginPassword\"\n                                        type=\"password\" placeholder=\"password\"\n                                        [(ngModel)]=\"userLoginPassword\" name=\"userLoginPassword\"\n                                        required></ion-input>\n                            </ion-item>\n\n              <div style=\"padding-top:20px\">\n                <ion-button color=\"medium\"\n                            id=\"userLoginButton\"\n                            (click)=\"login(userLoginEmail, userLoginPassword)\"\n                            [disabled]=\"!userLoginEmail || !heroForm.form.valid || !userLoginPassword\">\n                  Login\n                </ion-button>\n                <ion-button color=\"medium\" fill=\"clear\"\n                            (click)=\"loginAsDemo()\">\n                  Enter anonymously\n                </ion-button>\n              </div>\n            </form>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <span style=\"float:right;font-size:10px;\">version: 21.5.31</span>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=signin-signin-module-es2015.js.map