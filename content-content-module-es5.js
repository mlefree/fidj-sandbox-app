(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-content-module"], {
    /***/
    "6Tsf":
    /*!*******************************************!*\
      !*** ./src/app/content/content.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function Tsf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY29udGVudC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "BeSS":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/content.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function BeSS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      <img src=\"assets/icon/favicon.png\" height=\"15em\"> Home\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <!-- Default Refresher -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Home</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size-md=\"8\" offset-md=\"2\" size-sm=\"12\">\n\n        <app-explore-container content=\"Welcome&lt;br&gt;In case : sandbox@fidj.ovh&lt;br&gt;\"></app-explore-container>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "G98L":
    /*!***************************************************!*\
      !*** ./src/app/content/content-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ContentPageRoutingModule */

    /***/
    function G98L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContentPageRoutingModule", function () {
        return ContentPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _content_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./content.page */
      "tZ9R");

      var routes = [{
        path: '',
        component: _content_page__WEBPACK_IMPORTED_MODULE_3__["ContentPage"]
      }];

      var ContentPageRoutingModule = function ContentPageRoutingModule() {
        _classCallCheck(this, ContentPageRoutingModule);
      };

      ContentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ContentPageRoutingModule);
      /***/
    },

    /***/
    "lehC":
    /*!*******************************************!*\
      !*** ./src/app/content/content.module.ts ***!
      \*******************************************/

    /*! exports provided: ContentPageModule */

    /***/
    function lehC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContentPageModule", function () {
        return ContentPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _content_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./content.page */
      "tZ9R");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "qtYk");
      /* harmony import */


      var _content_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./content-routing.module */
      "G98L");

      var ContentPageModule = function ContentPageModule() {
        _classCallCheck(this, ContentPageModule);
      };

      ContentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _content_routing_module__WEBPACK_IMPORTED_MODULE_7__["ContentPageRoutingModule"]],
        declarations: [_content_page__WEBPACK_IMPORTED_MODULE_5__["ContentPage"]]
      })], ContentPageModule);
      /***/
    },

    /***/
    "tZ9R":
    /*!*****************************************!*\
      !*** ./src/app/content/content.page.ts ***!
      \*****************************************/

    /*! exports provided: ContentPage */

    /***/
    function tZ9R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContentPage", function () {
        return ContentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_content_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./content.page.html */
      "BeSS");
      /* harmony import */


      var _content_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./content.page.scss */
      "6Tsf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var fidj__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! fidj */
      "rN4z");

      var ContentPage = /*#__PURE__*/function () {
        function ContentPage(router, fidjService) {
          _classCallCheck(this, ContentPage);

          this.router = router;
          this.fidjService = fidjService;
          this.refresh(null);
        }

        _createClass(ContentPage, [{
          key: "refresh",
          value: function refresh(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (event) {
                        event.target.complete();
                      }

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }]);

        return ContentPage;
      }();

      ContentPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: fidj__WEBPACK_IMPORTED_MODULE_5__["FidjService"]
        }];
      };

      ContentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-content',
        template: _raw_loader_content_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_content_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ContentPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=content-content-module-es5.js.map