(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-my-module"],{

/***/ "Cr73":
/*!*********************************!*\
  !*** ./src/app/my/my.module.ts ***!
  \*********************************/
/*! exports provided: MyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPageModule", function() { return MyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _my_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-routing.module */ "k60Q");
/* harmony import */ var _my_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my.page */ "fsC2");







let MyPageModule = class MyPageModule {
};
MyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _my_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyPageRoutingModule"]
        ],
        declarations: [_my_page__WEBPACK_IMPORTED_MODULE_6__["MyPage"]]
    })
], MyPageModule);



/***/ }),

/***/ "VIAa":
/*!*********************************!*\
  !*** ./src/app/my/my.page.scss ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215L215LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "Y4PQ":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my/my.page.html ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n\n    <ion-tab-button tab=\"content\">\n      <ion-icon name=\"leaf-outline\"></ion-icon>\n      <ion-label>Content</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"profile\">\n      <ion-icon name=\"person-circle-outline\"></ion-icon>\n      <ion-label>Profile</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ "fsC2":
/*!*******************************!*\
  !*** ./src/app/my/my.page.ts ***!
  \*******************************/
/*! exports provided: MyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPage", function() { return MyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_my_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./my.page.html */ "Y4PQ");
/* harmony import */ var _my_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my.page.scss */ "VIAa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var fidj__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fidj */ "rN4z");






let MyPage = class MyPage {
    constructor(router, fidjService) {
        this.router = router;
        this.fidjService = fidjService;
    }
    ngOnInit() {
        if (this.fidjService.isLoggedIn()) {
        }
        else {
            console.log('not logged in');
            return this.router.navigateByUrl('/signin');
        }
    }
};
MyPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: fidj__WEBPACK_IMPORTED_MODULE_5__["FidjService"] }
];
MyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-my',
        template: _raw_loader_my_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MyPage);



/***/ }),

/***/ "k60Q":
/*!*****************************************!*\
  !*** ./src/app/my/my-routing.module.ts ***!
  \*****************************************/
/*! exports provided: MyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPageRoutingModule", function() { return MyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _my_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my.page */ "fsC2");




const routes = [
    {
        path: '',
        component: _my_page__WEBPACK_IMPORTED_MODULE_3__["MyPage"],
        children: [
            {
                path: 'content',
                loadChildren: () => Promise.all(/*! import() | content-content-module */[__webpack_require__.e("common"), __webpack_require__.e("content-content-module")]).then(__webpack_require__.bind(null, /*! ../content/content.module */ "lehC")).then(m => m.ContentPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ../profile/profile.module */ "cRhG")).then(m => m.ProfilePageModule)
            },
            {
                path: '',
                redirectTo: '/my/content',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/my/content',
        pathMatch: 'full'
    }
];
let MyPageRoutingModule = class MyPageRoutingModule {
};
MyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MyPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=my-my-module-es2015.js.map