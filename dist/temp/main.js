(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main-nav></main-nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _materials_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./materials.module */ "./src/app/materials.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main-dashboard/main-dashboard.component */ "./src/app/main-dashboard/main-dashboard.component.ts");
/* harmony import */ var _signin_dialog_signin_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./signin-dialog/signin-dialog.component */ "./src/app/signin-dialog/signin-dialog.component.ts");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./store/store */ "./src/app/store/store.ts");
/* harmony import */ var _posts_posts_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./posts/posts.module */ "./src/app/posts/posts.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _post_form_post_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./post-form/post-form.component */ "./src/app/post-form/post-form.component.ts");
/* harmony import */ var _store_effects_blogPost_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./store/effects/blogPost.effects */ "./src/app/store/effects/blogPost.effects.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var routes = [
    { path: 'main', component: _main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["MainDashboardComponent"] },
    { path: 'post/edit/:id', component: _post_form_post_form_component__WEBPACK_IMPORTED_MODULE_19__["PostFormComponent"] },
    { path: 'post', component: _post_form_post_form_component__WEBPACK_IMPORTED_MODULE_19__["PostFormComponent"] },
    { path: '**', redirectTo: 'main' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_12__["MainNavComponent"],
                _main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["MainDashboardComponent"],
                _signin_dialog_signin_dialog_component__WEBPACK_IMPORTED_MODULE_14__["SigninDialogComponent"]
            ],
            entryComponents: [
                _signin_dialog_signin_dialog_component__WEBPACK_IMPORTED_MODULE_14__["SigninDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _materials_module__WEBPACK_IMPORTED_MODULE_3__["MaterialsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _posts_posts_module__WEBPACK_IMPORTED_MODULE_17__["PostsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabaseModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([_store_effects_blogPost_effects__WEBPACK_IMPORTED_MODULE_20__["BlogEffects"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_store_store__WEBPACK_IMPORTED_MODULE_16__["reducers"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"].forRoot(routes)
            ],
            providers: [
                { provide: angularfire2__WEBPACK_IMPORTED_MODULE_5__["FirebaseOptionsToken"], useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebase },
                // { provide: FirebaseAppNameToken, useValue: 'angular-auth-firebase' },
                // { provide: FirebaseAppConfigToken, useValue: undefined }
                _shared_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main-dashboard/main-dashboard.component.css":
/*!*************************************************************!*\
  !*** ./src/app/main-dashboard/main-dashboard.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#cards-container {\n  /* margin-top: 0px;\n  min-height: 100%;\n  max-height: 100%;\n  background: url('/../assets/bbq.jpg') center center;\n  background-size: cover;\n  overflow: hidden; */\n  background-color: whitesmoke\n}\n\n.main-title {\n  z-index: 2;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  font-size: 20px;\n  width: 100%;\n  height: 26px;\n  padding: 0;\n  margin: 0;\n  margin-top: -70px;\n  font-size: 12rem;\n  font: 400 150px/1.3 'Lobster Two', Helvetica, sans-serif;\n  text-align: center;\n  color: #031a1a !important;\n  text-shadow: 1px 1px 1px #000;\n}\n\n.edit-mode-toggle {\n  z-index: 2;\n  position: absolute;\n  top: 5%;\n  left: 1%;\n  right: 0;\n  padding: 0;\n  margin: 0;\n}\n\n.grid-container {\n  margin: 20px;\n}\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content {\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/main-dashboard/main-dashboard.component.html":
/*!**************************************************************!*\
  !*** ./src/app/main-dashboard/main-dashboard.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n    <mat-grid-list cols=\"3\" rowHeight=\"100px\">\n        <mat-grid-tile colspan=\"3\" rowspan=\"2\">\n            <h1 class=\"main-title\"><strong>Tourista.io</strong></h1>\n            <img style=\"width:100%; padding-top: 3px\" src=\"../../assets/map-banner.png\" height=\"104%\" alt=\"Main Banner\">\n        </mat-grid-tile>\n    </mat-grid-list>\n    <mat-grid-list cols=\"3\" rowHeight=\"100px\">\n        <mat-grid-tile colspan=\"3\" rowspan=\"4\" rowHeight=\"100px\">\n            <img mat-card-image style=\"z-index: 1; margin-bottom: 30px\" src=\"../../assets/main-banner.jpg\" height=100% width=100% alt=\"Sub Banner\">\n        </mat-grid-tile>\n    </mat-grid-list>\n    <button class=\"editMode\" *ngIf=\"(editMode$ | async)\" (click)=\"navToNewPostForm()\" mat-raised-button>\n        <mat-icon class=\"editMode\">add_circle</mat-icon> New Post\n      </button>\n      <div style=\"display: flex !important; flex-wrap: wrap !important\">\n        <div class=\"card blog-card\" style=\"min-width: 33%; max-width: 33%;\" *ngFor=\"let post of (blogPosts$ | async); let i = index\">\n          <button (click)=\"selectBlogCard(post.id)\" >\n            <div class=\"card-body\">\n              <h2 class=\"card-title blog-card-title\">{{post.title}}</h2>\n              <h4 class=\"card-text blog-card-text\">{{post.description}}</h4>\n              <img style=\"height:185px\" class=\"card-img-top\" [src]=\"post.imageUrl\" alt=\"Insert Cover Image\">\n            </div>\n          </button>\n        </div>\n      </div>\n</div>\n\n<!-- <pre>{{ (blogPosts$ | async) | json }}</pre> -->\n"

/***/ }),

/***/ "./src/app/main-dashboard/main-dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/main-dashboard/main-dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: MainDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainDashboardComponent", function() { return MainDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _store_actions_blogPost_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/blogPost.actions */ "./src/app/store/actions/blogPost.actions.ts");
/* harmony import */ var _store_actions_mode_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/mode.actions */ "./src/app/store/actions/mode.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainDashboardComponent = /** @class */ (function () {
    function MainDashboardComponent(router, store) {
        var _this = this;
        this.router = router;
        this.store = store;
        this.viewMode = true;
        this.viewMode$ = this.store.select('mode', 'view').subscribe(function (viewMode) { return _this.viewMode = viewMode; });
    }
    MainDashboardComponent.prototype.ngOnInit = function () {
        //fetch blog posts on start
        this.store.dispatch(new _store_actions_blogPost_actions__WEBPACK_IMPORTED_MODULE_3__["requestBlogPosts"]());
        this.blogPosts$ = this.store.select('posts', 'blogs');
        this.editMode$ = this.store.select('mode', 'edit');
    };
    MainDashboardComponent.prototype.selectBlogCard = function (uid) {
        if (this.viewMode) {
            alert('View Mode not yet implemented!');
            return;
        }
        ;
        this.router.navigate(['post', 'edit', uid]);
    };
    MainDashboardComponent.prototype.navToNewPostForm = function () {
        this.store.dispatch(new _store_actions_mode_actions__WEBPACK_IMPORTED_MODULE_4__["activateCreateMode"]());
        this.router.navigate(['/post']);
    };
    MainDashboardComponent.prototype.ngOnDestroy = function () {
        this.viewMode$.unsubscribe();
    };
    MainDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'main-dashboard',
            template: __webpack_require__(/*! ./main-dashboard.component.html */ "./src/app/main-dashboard/main-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./main-dashboard.component.css */ "./src/app/main-dashboard/main-dashboard.component.css"), __webpack_require__(/*! ../../blog-card.css */ "./src/blog-card.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], MainDashboardComponent);
    return MainDashboardComponent;
}());



/***/ }),

/***/ "./src/app/main-nav/main-nav.component.css":
/*!*************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".editMode {\n  background-color: rgba(226, 85, 49, 0.863) !important;\n}\n\n.sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n  box-shadow: 3px 0 6px rgba(0,0,0,.24);\n}\n\n#nav-profilePic {\n  position: relative;\n  left: -10px;\n  border-radius: 50%;\n  height: 40px;\n  float: left;\n  margin-left: -10px\n}\n\n.nav-button {\n  color: whitesmoke;\n  text-decoration: none;\n  font-size: 20px\n}\n\n.nav-icon {\n  padding: 5px;\n  position: relative;\n  top: -5px;\n  left: -8px;\n}\n\n.nav-spacer {\n  flex: 1 1 auto;\n}\n\n.mat-dialog-container {\n    padding-top: 0px !important;\n    width: 100% !important;\n    height: auto !important;\n}\n"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.html":
/*!**************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"app-conainer sidenav-container\">\n  <mat-sidenav-content>\n    <mat-toolbar [ngClass]=\"(editMode$ | async)? 'editMode': null\" style=\"background-color: rgb(3, 26, 26); color: whitesmoke\">\n      <mat-toolbar-row>\n        <span>Travel Blog</span>\n        <span class=\"nav-spacer\"></span>\n        <div *ngIf=\"!(userInfo$ | async).isLoggedIn\">\n            <span style=\"margin-right: 25px\">\n              <a (click)=\"openLogInDialog()\" class=\"nav-button\">Sign In</a>\n            </span>\n            <span> <a class=\"nav-button\" href=\"#\">Register</a></span>\n        </div>\n        <div *ngIf=\"(userInfo$ | async).isLoggedIn\">\n            <img id=\"nav-profilePic\" [src]=\"(userInfo$ | async).userPhotoURL\" alt=\"User Profile Picture\">\n              <span style=\"text-align: center\">\n                <button mat-button  class=\"nav-button\" [matMenuTriggerFor]=\"menu\">{{(userInfo$ | async).userName}}</button>\n                  <mat-menu #menu=\"matMenu\">\n                    <button mat-menu-item (click)=\"switchToEditMode()\">Edit Mode</button>\n                    <button mat-menu-item (click)=\"switchToViewMode()\">View Mode</button>\n                    <mat-divider></mat-divider>\n                    <button style=\"color: whitesmoke\" mat-button (click)=\"logout()\" href=\"#\">Log Out</button>\n                  </mat-menu>\n              </span>\n        </div>\n      </mat-toolbar-row>\n    </mat-toolbar>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _signin_dialog_signin_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../signin-dialog/signin-dialog.component */ "./src/app/signin-dialog/signin-dialog.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var src_app_store_actions_mode_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/actions/mode.actions */ "./src/app/store/actions/mode.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MainNavComponent = /** @class */ (function () {
    function MainNavComponent(store, authService, dialog) {
        this.store = store;
        this.authService = authService;
        this.dialog = dialog;
    }
    MainNavComponent.prototype.ngOnInit = function () {
        this.authService.watchAuthState().subscribe();
        this.userInfo$ = this.store.select("user");
        this.editMode$ = this.store.select("mode", "edit");
    };
    MainNavComponent.prototype.openLogInDialog = function () {
        this.dialog.open(_signin_dialog_signin_dialog_component__WEBPACK_IMPORTED_MODULE_2__["SigninDialogComponent"]);
    };
    MainNavComponent.prototype.switchToEditMode = function () {
        this.store.dispatch(new src_app_store_actions_mode_actions__WEBPACK_IMPORTED_MODULE_5__["activateEditMode"]());
    };
    MainNavComponent.prototype.switchToViewMode = function () {
        this.store.dispatch(new src_app_store_actions_mode_actions__WEBPACK_IMPORTED_MODULE_5__["deactivateEditMode"]());
    };
    MainNavComponent.prototype.logout = function () {
        this.authService.logout();
        this.store.dispatch(new src_app_store_actions_mode_actions__WEBPACK_IMPORTED_MODULE_5__["deactivateEditMode"]());
    };
    MainNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'main-nav',
            template: __webpack_require__(/*! ./main-nav.component.html */ "./src/app/main-nav/main-nav.component.html"),
            styles: [__webpack_require__(/*! ./main-nav.component.css */ "./src/app/main-nav/main-nav.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/app/materials.module.ts":
/*!*************************************!*\
  !*** ./src/app/materials.module.ts ***!
  \*************************************/
/*! exports provided: MaterialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialsModule", function() { return MaterialsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialsModule = /** @class */ (function () {
    function MaterialsModule() {
    }
    MaterialsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"]
            ]
        })
    ], MaterialsModule);
    return MaterialsModule;
}());



/***/ }),

/***/ "./src/app/post-form/post-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/post-form/post-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/post-form/post-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/post-form/post-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n      <h1>Create a New Blog Post</h1>\n      <br>\n      <form #f=\"ngForm\" (ngSubmit)=\"onSubmitForm(f)\">\n          <div class=\"row\">\n              <div class=\"col-md-7\">\n                  <div class=\"form-group\">\n                      <label for=\"Title\">Title</label>\n                      <input #formTitle=\"ngModel\" type=\"text\" name=\"title\" maxlength=\"34\" [(ngModel)]=\"blogPost.title\" class=\"form-control\" id=\"post-title\" placeholder=\"Enter title\" required>\n                      <div *ngIf=\"formTitle.invalid && formTitle.touched\" maxlength=\"102\" class=\"alert alert-danger\">\n                          Title field is required\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label for=\"Descripion\">Description</label>\n                      <input #desc=\"ngModel\" type=\"text\" name=\"description\" [(ngModel)]=\"blogPost.description\" class=\"form-control\" id=\"post-desc\" [value]=\"blogPost.description\" required>\n                      <div *ngIf=\"desc.invalid && desc.touched\" class=\"alert alert-danger\">\n                          A description/summary of this post is required\n                      </div>\n                      <small id=\"emailHelp\" class=\"form-text text-muted\">A brief description of this post.</small>\n                  </div>\n                  <div class=\"form-group\">\n                      <label for=\"Image Url\">Image Url</label>\n                      <input #image=\"ngModel\" type=\"url\" name=\"imageUrl\" [(ngModel)]=\"blogPost.imageUrl\" class=\"form-control\" id=\"post-imageURL\" [value]=\"blogPost.imageUrl\" required>\n                      <div *ngIf=\"image.invalid && image.touched\" class=\"alert alert-danger\">\n                          Image is required\n                      </div>\n                      <small id=\"emailHelp\" class=\"form-text text-muted\">Cover image for blog entry</small>\n                  </div>\n              </div>\n              <div class=\"col-md-5\">\n                  <preview-card [previewPost]=\"blogPost\"></preview-card>\n              </div>\n          </div>\n          <div class=\"form-group\" style=\"margin-top: 20px\">\n              <quill-editor [style]=\"{height: '420px'}\"></quill-editor>\n          </div>\n          <div style=\"float: right; margin-bottom: 20px\">\n              <button type=\"submit\" class=\"btn btn-primary\" style=\"margin-right: 5px\">Submit</button>\n              <button  type=\"button\"  *ngIf=\"paramId\" (click)=\"onDeletePost()\" class=\"btn btn-danger\" style=\"margin-right: 5px\">Delete</button>\n              <button  type=\"button\" pull-right class=\"btn btn-default\" (click)=\"onCancel()\">Cancel</button>\n          </div>\n      </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/post-form/post-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/post-form/post-form.component.ts ***!
  \**************************************************/
/*! exports provided: PostFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostFormComponent", function() { return PostFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _posts_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts/posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostFormComponent = /** @class */ (function () {
    function PostFormComponent(router, route, store, postsService) {
        this.router = router;
        this.route = route;
        this.store = store;
        this.postsService = postsService;
        this.blog$ = this.store.select('posts', 'blogs');
    }
    PostFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramId = this.route.snapshot.params.id;
        this.mode$ = this.store.select('mode').subscribe(function (mode) {
            _this.editMode = mode.edit,
                _this.createMode = mode.create;
        });
        if (this.createMode)
            this.setDefaultValues();
        else {
            this.blog$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (posts) {
                return posts.find(function (post) { return post.id == _this.paramId; });
            })).subscribe(function (post) { return _this.blogPost = post; });
        }
    };
    PostFormComponent.prototype.setDefaultValues = function () {
        return this.blogPost = {
            title: "Title of Blog Post",
            description: "A brief description of the blog post entry",
            imageUrl: "http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/w3css/img_mountains_wide.jpg"
        };
    };
    PostFormComponent.prototype.onSubmitForm = function (entry) {
        if (!!this.paramId && confirm('Update this Blog Post?'))
            this.postsService.updatePost(this.blogPost.id, entry.value);
        else if (this.createMode)
            this.postsService.createPost(entry);
        this.router.navigate(['/main']);
    };
    PostFormComponent.prototype.onDeletePost = function () {
        //if user cancels prompt, function finishes without calling delete function
        if (!confirm('Are you sure you want to delete this Post?'))
            return;
        this.postsService.deletePost(this.blogPost.id);
        this.router.navigate(['/main']);
    };
    PostFormComponent.prototype.onCancel = function () {
        this.router.navigate(['/main']);
    };
    PostFormComponent.prototype.ngOnDestroy = function () {
        this.mode$.unsubscribe();
    };
    PostFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-form',
            template: __webpack_require__(/*! ./post-form.component.html */ "./src/app/post-form/post-form.component.html"),
            styles: [__webpack_require__(/*! ./post-form.component.css */ "./src/app/post-form/post-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _posts_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]])
    ], PostFormComponent);
    return PostFormComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.module.ts":
/*!***************************************!*\
  !*** ./src/app/posts/posts.module.ts ***!
  \***************************************/
/*! exports provided: PostsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsModule", function() { return PostsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _post_form_post_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post-form/post-form.component */ "./src/app/post-form/post-form.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/index.js");
/* harmony import */ var _preview_card_preview_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../preview-card/preview-card.component */ "./src/app/preview-card/preview-card.component.ts");
/* harmony import */ var _materials_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../materials.module */ "./src/app/materials.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./posts.service */ "./src/app/posts/posts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PostsModule = /** @class */ (function () {
    function PostsModule() {
    }
    PostsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_post_form_post_form_component__WEBPACK_IMPORTED_MODULE_2__["PostFormComponent"], _preview_card_preview_card_component__WEBPACK_IMPORTED_MODULE_5__["PreviewCardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_4__["QuillModule"],
                _materials_module__WEBPACK_IMPORTED_MODULE_6__["MaterialsModule"]
            ],
            exports: [_post_form_post_form_component__WEBPACK_IMPORTED_MODULE_2__["PostFormComponent"]],
            providers: [_posts_service__WEBPACK_IMPORTED_MODULE_8__["PostsService"]]
        })
    ], PostsModule);
    return PostsModule;
}());



/***/ }),

/***/ "./src/app/posts/posts.service.ts":
/*!****************************************!*\
  !*** ./src/app/posts/posts.service.ts ***!
  \****************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsService = /** @class */ (function () {
    function PostsService(db) {
        this.db = db;
    }
    PostsService.prototype.createPost = function (f) {
        this.db.list('/posts/').push({
            title: f.control.value.title,
            description: f.control.value.description,
            imageUrl: f.control.value.imageUrl
        });
    };
    PostsService.prototype.getAllPosts = function () {
        return this.db.list('/posts').snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.val();
                var id = a.payload.key;
                return __assign({ id: id }, data);
            });
        });
    };
    PostsService.prototype.updatePost = function (blogId, post) {
        this.db.object('/posts/' + blogId).update(post);
    };
    PostsService.prototype.deletePost = function (blogId) {
        this.db.object('/posts/' + blogId).remove();
    };
    PostsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], PostsService);
    return PostsService;
}());



/***/ }),

/***/ "./src/app/preview-card/preview-card.component.css":
/*!*********************************************************!*\
  !*** ./src/app/preview-card/preview-card.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  color: whitesmoke\n}\n"

/***/ }),

/***/ "./src/app/preview-card/preview-card.component.html":
/*!**********************************************************!*\
  !*** ./src/app/preview-card/preview-card.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card blog-card\" style=\"max-width: 100%; height: 388px; background-color: #424242\">\n  <div class=\"card-body\">\n    <h2 class=\"card-title blog-card-title\">{{previewPost.title}}</h2>\n    <h4 class=\"card-text blog-card-text\">{{previewPost.description}}</h4>\n    <img style=\"height:185px\" class=\"card-img-top\" [src]=\"previewPost.imageUrl\" alt=\"Insert Cover Image\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/preview-card/preview-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/preview-card/preview-card.component.ts ***!
  \********************************************************/
/*! exports provided: PreviewCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewCardComponent", function() { return PreviewCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PreviewCardComponent = /** @class */ (function () {
    function PreviewCardComponent(route, store) {
        this.route = route;
        this.store = store;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PreviewCardComponent.prototype, "previewPost", void 0);
    PreviewCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'preview-card',
            template: __webpack_require__(/*! ./preview-card.component.html */ "./src/app/preview-card/preview-card.component.html"),
            styles: [__webpack_require__(/*! ./preview-card.component.css */ "./src/app/preview-card/preview-card.component.css"), __webpack_require__(/*! ../../blog-card.css */ "./src/blog-card.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], PreviewCardComponent);
    return PreviewCardComponent;
}());



/***/ }),

/***/ "./src/app/shared/auth.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/auth.service.ts ***!
  \****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _store_actions_login_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/login.actions */ "./src/app/store/actions/login.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = /** @class */ (function () {
    function AuthService(router, afAuth, store, snackBar) {
        this.router = router;
        this.afAuth = afAuth;
        this.store = store;
        this.snackBar = snackBar;
        this.adminId = 'XI6JVm0PdARwR2QcdMQykNnKJFS2';
    }
    AuthService.prototype.watchAuthState = function () {
        var _this = this;
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (userData) {
            if (!!userData) {
                _this.snackBar.open("Welcome, " + userData.displayName + "!", null, { duration: 2000 });
                _this.store.dispatch(new _store_actions_login_actions__WEBPACK_IMPORTED_MODULE_4__["LoginUser"](userData));
                if (_this.adminId === userData.uid)
                    _this.store.dispatch(new _store_actions_login_actions__WEBPACK_IMPORTED_MODULE_4__["LoginAdmin"]());
            }
        }));
    };
    AuthService.prototype.login = function (method, credentials) {
        switch (method) {
            case 'facebook':
                return this.afAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider())
                    .catch(function (error) { return console.log(error); });
            case 'google':
                return this.afAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider())
                    .catch(function (error) { return console.log(error); });
            case 'twitter':
                return this.afAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].TwitterAuthProvider());
            default:
                this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
        }
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
        this.store.dispatch(new _store_actions_login_actions__WEBPACK_IMPORTED_MODULE_4__["LogoutUser"]());
        this.router.navigate(['main']);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/signin-dialog/signin-dialog.component.css":
/*!***********************************************************!*\
  !*** ./src/app/signin-dialog/signin-dialog.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signin-button {\n  padding-right: 20px !important\n}\n\n#signin-form {\n  border-right: solid 1px;\n}\n"

/***/ }),

/***/ "./src/app/signin-dialog/signin-dialog.component.html":
/*!************************************************************!*\
  !*** ./src/app/signin-dialog/signin-dialog.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-6\">\n      <form id=\"signin-form\" #f=\"ngForm\">\n          <h2>Sign In</h2>\n          <br>\n          <mat-form-field style=\"width: 90%;\">\n            <input color=\"white\" matInput ngModel name=\"email\" placeholder=\"Email\" type=\"email\" required>\n          </mat-form-field>\n          <br>\n          <mat-form-field style=\"width: 90%;\">\n            <input matInput ngModel name=\"password\" placeholder=\"Password\" type=\"password\" required>\n          </mat-form-field>\n          <button color=\"accent\"mat-raised-button>Submit</button>\n        </form>\n  </div>\n  <div class=\"col-sm-6\" style=\"padding-top: 12%\">\n    <div>\n      <button (click)=\"onLogin('google')\" style=\"margin-bottom: 5px; width: 100%; background-color: #d54b3d\" mat-raised-button mat-dialog-close>Google</button>\n      <button (click)=\"onLogin('facebook')\" style=\"margin-bottom: 5px; width: 100%; background-color: #4267b2\" mat-raised-button mat-dialog-close=\"\">Facebook</button>\n      <!-- <button (click)=\"onLogin('twitter')\" style=\"width: 100%; background-color: #1da1f2\" mat-raised-button mat-dialog-close=\"\">Twitter</button> -->\n    </div>\n   </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/signin-dialog/signin-dialog.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/signin-dialog/signin-dialog.component.ts ***!
  \**********************************************************/
/*! exports provided: SigninDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninDialogComponent", function() { return SigninDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SigninDialogComponent = /** @class */ (function () {
    function SigninDialogComponent(authService) {
        this.authService = authService;
    }
    SigninDialogComponent.prototype.ngOnInit = function () {
    };
    SigninDialogComponent.prototype.onLogin = function (type, credentials) {
        this.authService.login(type, credentials);
    };
    SigninDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin-dialog',
            template: __webpack_require__(/*! ./signin-dialog.component.html */ "./src/app/signin-dialog/signin-dialog.component.html"),
            styles: [__webpack_require__(/*! ./signin-dialog.component.css */ "./src/app/signin-dialog/signin-dialog.component.css")],
        }),
        __metadata("design:paramtypes", [_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SigninDialogComponent);
    return SigninDialogComponent;
}());



/***/ }),

/***/ "./src/app/store/actions/blogPost.actions.ts":
/*!***************************************************!*\
  !*** ./src/app/store/actions/blogPost.actions.ts ***!
  \***************************************************/
/*! exports provided: REQUEST_BLOGPOSTS, LOAD_BLOGPOSTS, requestBlogPosts, loadBlogPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_BLOGPOSTS", function() { return REQUEST_BLOGPOSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BLOGPOSTS", function() { return LOAD_BLOGPOSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestBlogPosts", function() { return requestBlogPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadBlogPosts", function() { return loadBlogPosts; });
var REQUEST_BLOGPOSTS = 'REQUEST_BLOGPOSTS';
var LOAD_BLOGPOSTS = 'LOAD_BLOGPOSTS';
var requestBlogPosts = /** @class */ (function () {
    function requestBlogPosts() {
        this.type = REQUEST_BLOGPOSTS;
    }
    return requestBlogPosts;
}());

var loadBlogPosts = /** @class */ (function () {
    function loadBlogPosts(payload) {
        this.payload = payload;
        this.type = LOAD_BLOGPOSTS;
    }
    return loadBlogPosts;
}());



/***/ }),

/***/ "./src/app/store/actions/login.actions.ts":
/*!************************************************!*\
  !*** ./src/app/store/actions/login.actions.ts ***!
  \************************************************/
/*! exports provided: LOGIN, LOGINADMIN, LOGOUT, REGISTER, LoginUser, LoginAdmin, LogoutUser, RegisterUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGINADMIN", function() { return LOGINADMIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER", function() { return REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUser", function() { return LoginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAdmin", function() { return LoginAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutUser", function() { return LogoutUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUser", function() { return RegisterUser; });
var LOGIN = 'LOGIN';
var LOGINADMIN = 'LOGINADMIN';
var LOGOUT = 'LOGOUT';
var REGISTER = 'REGISTER';
var LoginUser = /** @class */ (function () {
    function LoginUser(payload) {
        this.payload = payload;
        this.type = LOGIN;
    }
    return LoginUser;
}());

var LoginAdmin = /** @class */ (function () {
    function LoginAdmin() {
        this.type = LOGINADMIN;
    }
    return LoginAdmin;
}());

var LogoutUser = /** @class */ (function () {
    function LogoutUser() {
        this.type = LOGOUT;
    }
    return LogoutUser;
}());

var RegisterUser = /** @class */ (function () {
    function RegisterUser() {
        this.type = REGISTER;
    }
    return RegisterUser;
}());



/***/ }),

/***/ "./src/app/store/actions/mode.actions.ts":
/*!***********************************************!*\
  !*** ./src/app/store/actions/mode.actions.ts ***!
  \***********************************************/
/*! exports provided: EDIT_MODE_ON, EDIT_MODE_OFF, CREATE_MODE_ON, CREATE_MODE_OFF, activateEditMode, deactivateEditMode, activateCreateMode, deactivateCreateMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_MODE_ON", function() { return EDIT_MODE_ON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_MODE_OFF", function() { return EDIT_MODE_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_MODE_ON", function() { return CREATE_MODE_ON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_MODE_OFF", function() { return CREATE_MODE_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activateEditMode", function() { return activateEditMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deactivateEditMode", function() { return deactivateEditMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activateCreateMode", function() { return activateCreateMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deactivateCreateMode", function() { return deactivateCreateMode; });
var EDIT_MODE_ON = 'EDIT_MODE_ON';
var EDIT_MODE_OFF = 'EDIT_MODE_OFF';
var CREATE_MODE_ON = 'CREATE_MODE_ON';
var CREATE_MODE_OFF = 'CREATE_MODE_OFF';
var activateEditMode = /** @class */ (function () {
    function activateEditMode() {
        this.type = EDIT_MODE_ON;
    }
    return activateEditMode;
}());

;
var deactivateEditMode = /** @class */ (function () {
    function deactivateEditMode() {
        this.type = EDIT_MODE_OFF;
    }
    return deactivateEditMode;
}());

;
var activateCreateMode = /** @class */ (function () {
    function activateCreateMode() {
        this.type = CREATE_MODE_ON;
    }
    return activateCreateMode;
}());

;
var deactivateCreateMode = /** @class */ (function () {
    function deactivateCreateMode() {
        this.type = CREATE_MODE_OFF;
    }
    return deactivateCreateMode;
}());

;


/***/ }),

/***/ "./src/app/store/effects/blogPost.effects.ts":
/*!***************************************************!*\
  !*** ./src/app/store/effects/blogPost.effects.ts ***!
  \***************************************************/
/*! exports provided: BlogEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogEffects", function() { return BlogEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_blogPost_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/blogPost.actions */ "./src/app/store/actions/blogPost.actions.ts");
/* harmony import */ var _posts_posts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../posts/posts.service */ "./src/app/posts/posts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlogEffects = /** @class */ (function () {
    function BlogEffects(postsService, actions$) {
        var _this = this;
        this.postsService = postsService;
        this.actions$ = actions$;
        // Listen for the 'REQUEST' action
        this.loadBlog$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_blogPost_actions__WEBPACK_IMPORTED_MODULE_3__["REQUEST_BLOGPOSTS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            return _this.postsService.getAllPosts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
                return new _actions_blogPost_actions__WEBPACK_IMPORTED_MODULE_3__["loadBlogPosts"](result);
            }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], BlogEffects.prototype, "loadBlog$", void 0);
    BlogEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_posts_posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]])
    ], BlogEffects);
    return BlogEffects;
}());



/***/ }),

/***/ "./src/app/store/reducers/blog.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/store/reducers/blog.reducer.ts ***!
  \************************************************/
/*! exports provided: blogReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blogReducer", function() { return blogReducer; });
/* harmony import */ var _actions_blogPost_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/blogPost.actions */ "./src/app/store/actions/blogPost.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var INITIAL_BLOG_STATE = {
    blogs: null
};
function blogReducer(state, action) {
    if (state === void 0) { state = INITIAL_BLOG_STATE; }
    switch (action.type) {
        case _actions_blogPost_actions__WEBPACK_IMPORTED_MODULE_0__["LOAD_BLOGPOSTS"]:
            return __assign({}, state, { blogs: action.payload.slice() });
    }
    return state;
}


/***/ }),

/***/ "./src/app/store/reducers/mode.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/store/reducers/mode.reducer.ts ***!
  \************************************************/
/*! exports provided: INITIAL_MODE_STATE, modeReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_MODE_STATE", function() { return INITIAL_MODE_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modeReducer", function() { return modeReducer; });
/* harmony import */ var _actions_mode_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/mode.actions */ "./src/app/store/actions/mode.actions.ts");

var INITIAL_MODE_STATE = {
    edit: false,
    view: true,
    create: false
};
function modeReducer(state, action) {
    if (state === void 0) { state = INITIAL_MODE_STATE; }
    switch (action.type) {
        case _actions_mode_actions__WEBPACK_IMPORTED_MODULE_0__["EDIT_MODE_ON"]:
            return {
                edit: true,
                view: false,
                create: false
            };
        case _actions_mode_actions__WEBPACK_IMPORTED_MODULE_0__["EDIT_MODE_OFF"]:
            return {
                edit: false,
                view: true,
                create: false
            };
        case _actions_mode_actions__WEBPACK_IMPORTED_MODULE_0__["CREATE_MODE_ON"]:
            return {
                edit: false,
                view: false,
                create: true
            };
        case _actions_mode_actions__WEBPACK_IMPORTED_MODULE_0__["CREATE_MODE_OFF"]:
            return {
                edit: false,
                view: false,
                create: false
            };
    }
    return state;
}


/***/ }),

/***/ "./src/app/store/reducers/user.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/store/reducers/user.reducer.ts ***!
  \************************************************/
/*! exports provided: userReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony import */ var _actions_login_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/login.actions */ "./src/app/store/actions/login.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var INITIAL_USER_STATE = {
    isLoggedIn: false,
    isAdmin: false,
    uuid: null,
    userName: null,
};
function userReducer(state, action) {
    if (state === void 0) { state = INITIAL_USER_STATE; }
    switch (action.type) {
        case _actions_login_actions__WEBPACK_IMPORTED_MODULE_0__["LOGIN"]:
            return __assign({}, state, { isLoggedIn: true, isAdmin: false, uuid: action.payload.uid, userName: action.payload.displayName, userPhotoURL: action.payload.photoURL });
        case _actions_login_actions__WEBPACK_IMPORTED_MODULE_0__["LOGINADMIN"]:
            return __assign({}, state, { isAdmin: true });
        case _actions_login_actions__WEBPACK_IMPORTED_MODULE_0__["LOGOUT"]:
            return __assign({}, INITIAL_USER_STATE);
        case _actions_login_actions__WEBPACK_IMPORTED_MODULE_0__["REGISTER"]:
            return __assign({}, state);
    }
    return state;
}


/***/ }),

/***/ "./src/app/store/store.ts":
/*!********************************!*\
  !*** ./src/app/store/store.ts ***!
  \********************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _reducers_user_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/user.reducer */ "./src/app/store/reducers/user.reducer.ts");
/* harmony import */ var _reducers_blog_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/blog.reducer */ "./src/app/store/reducers/blog.reducer.ts");
/* harmony import */ var _reducers_mode_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/mode.reducer */ "./src/app/store/reducers/mode.reducer.ts");



var reducers = {
    user: _reducers_user_reducer__WEBPACK_IMPORTED_MODULE_0__["userReducer"],
    posts: _reducers_blog_reducer__WEBPACK_IMPORTED_MODULE_1__["blogReducer"],
    mode: _reducers_mode_reducer__WEBPACK_IMPORTED_MODULE_2__["modeReducer"]
};


/***/ }),

/***/ "./src/blog-card.css":
/*!***************************!*\
  !*** ./src/blog-card.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Application-wide style rules */\n\n.card-img-top {\n  width: 100% !important;\n}\n\n.blog-card {\n  display: block;\n  margin: 2px;\n  padding: 3px;\n  min-width: 32%;\n  max-width: 32%;\n  flex-grow: 1;\n  border-radius: 4px;\n}\n\n.blog-card >  button {\n  background-color:  #424242;\n  width: 100%;\n  padding: 5px\n}\n\n.blog-card img {\n  height: 300px !important;\n\n}\n\n.blog-card-title {\n  color: lightsteelblue;\n  font-family: \"Comic Sans MS\", \"Comic Sans\", cursive;\n  margin-top: 10px;\n  text-align: center;\n  height: 20px;\n}\n\n.blog-card-text {\n  color: lightgray;\n  padding-top: 10px;\n  margin-bottom: 8px;\n  text-align: center;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  height: 32px;\n}\n"

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDxL7EjuVnbMdJe6PmuYY6n__9Bd9tB9Tk",
        authDomain: "travel-blog-app.firebaseapp.com",
        databaseURL: "https://travel-blog-app.firebaseio.com",
        projectId: "travel-blog-app",
        storageBucket: "travel-blog-app.appspot.com",
        messagingSenderId: "693287944296"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kunalojha/Desktop/Travel Blog App/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map