webpackJsonp([5],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_controller_loading_controller__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_present_toast_present__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(navCtrl, navParams, alertCtrl, http, loadingprovider, toastprovider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loadingprovider = loadingprovider;
        this.toastprovider = toastprovider;
        this.url = 'http://localhost:3000';
    }
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPasswordPage');
    };
    ForgotPasswordPage.prototype.resetPassword = function (email) {
        var _this = this;
        var objUser = {
            email: email
        };
        if (this.validForm()) {
            this.loadingprovider.present();
            this.http.post(this.url + "/auth/forgot_password", objUser).subscribe(function (res) {
                try {
                    _this.toastprovider.presentToast('Email Enviado, Verifique sua caixa de email');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                    _this.loadingprovider.stopLoader();
                }
                catch (err) {
                    alert('email não cadastrado');
                }
            }, function (err) {
                _this.toastprovider.presentToast(err.error.error);
                _this.loadingprovider.stopLoader();
            });
        }
    };
    ForgotPasswordPage.prototype.validForm = function () {
        if (this.email == null || this.email == "") {
            this.toastprovider.presentToast('Campo Email obrigatório.');
            return false;
        }
        return true;
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"C:\projetos\front-end\src\pages\forgot-password\forgot-password.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>RECUPERAR SENHA</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="banner" padding>\n\n\n\n  <label class="reset-password">Um Email será enviado para o endereço cadastrado</label>\n\n  <div>\n\n    <input type="text" name="fname" [(ngModel)]="email" placeholder="Email">\n\n  </div>\n\n  <button ion-button class="confirm-button" (click)=" resetPassword(email)">CONFIRMAR</button>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\projetos\front-end\src\pages\forgot-password\forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__providers_loading_controller_loading_controller__["a" /* LoadingControllerProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_toast_present_toast_present__["a" /* ToastPresentProvider */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_present_toast_present__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewUserPage = /** @class */ (function () {
    function NewUserPage(navCtrl, navParams, http, toastprovider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastprovider = toastprovider;
        this.url = 'http://localhost:3000';
    }
    NewUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewUserPage');
    };
    NewUserPage.prototype.newUser = function (name, email, password) {
        var _this = this;
        var objUser = {
            name: name,
            email: email,
            password: password
        };
        if (this.validForm()) {
            this.http.post(this.url + "/auth/register", objUser).subscribe(function (res) {
                try {
                    _this.toastprovider.presentToast('Usuário criado com sucesso!');
                    _this.navCtrl.pop();
                }
                catch (err) {
                }
                console.log(res);
            }, function (err) {
                _this.toastprovider.presentToast(err.error.error);
                console.log(err.error.error);
            });
        }
    };
    NewUserPage.prototype.validForm = function () {
        if (this.name == null || this.name == "") {
            this.toastprovider.presentToast('Campo Nome obrigatório.');
            return false;
        }
        if (this.email == null || this.email == "") {
            this.toastprovider.presentToast('Campo Email obrigatório.');
            return false;
        }
        if (this.password == null || this.password == "") {
            this.toastprovider.presentToast('Campo Senha obrigatório.');
            return false;
        }
        return true;
    };
    NewUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-new-user',template:/*ion-inline-start:"C:\projetos\front-end\src\pages\new-user\new-user.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>NOVO USUÁRIO</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="banner" padding>\n\n  <div>\n\n    <label>Nome</label>\n\n    <input type="text" name="fname" [(ngModel)]="name">\n\n  </div>\n\n  <div>\n\n    <label>Email</label>\n\n    <input type="text" name="fname" [(ngModel)]="email">\n\n  </div>\n\n  <div>\n\n    <label>Senha</label>\n\n    <input type="text" name="fname" [(ngModel)]="password">\n\n  </div>\n\n  <button ion-button class="salve-button" (click)="newUser(name, email, password)">SALVAR</button>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\projetos\front-end\src\pages\new-user\new-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_toast_present_toast_present__["a" /* ToastPresentProvider */]])
    ], NewUserPage);
    return NewUserPage;
}());

//# sourceMappingURL=new-user.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/forgot-password/forgot-password.module": [
		284,
		4
	],
	"../pages/list-projects/list-projects.module": [
		285,
		3
	],
	"../pages/login/login.module": [
		286,
		2
	],
	"../pages/new-user/new-user.module": [
		287,
		1
	],
	"../pages/register-project/register-project.module": [
		288,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_project_register_project__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_projects_list_projects__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_new_user_new_user__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_service_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_forgot_password_forgot_password__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_loading_controller_loading_controller__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_toast_present_toast_present__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_project_register_project__["a" /* RegisterProjectPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_projects_list_projects__["a" /* ListProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_new_user_new_user__["a" /* NewUserPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-projects/list-projects.module#ListProjectsPageModule', name: 'ListProjectsPage', segment: 'list-projects', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-user/new-user.module#NewUserPageModule', name: 'NewUserPage', segment: 'new-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register-project/register-project.module#RegisterProjectPageModule', name: 'RegisterProjectPage', segment: 'register-project', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_project_register_project__["a" /* RegisterProjectPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_projects_list_projects__["a" /* ListProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_new_user_new_user__["a" /* NewUserPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_service_service__["a" /* ServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_loading_controller_loading_controller__["a" /* LoadingControllerProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_toast_present_toast_present__["a" /* ToastPresentProvider */],
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(21);

var apiConfig = {
    BASE_URL: "http://localhost:3000",
};
var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
    'Content-Type': 'application/json',
    'responseType': 'json',
    'x-access-token': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZTAwZjljZjdjMTQzMmZmNGVjMjQ3MyIsImlhdCI6MTU3NjA4MzgyMywiZXhwIjoxNTc2MTcwMjIzfQ.z9aRHE1rDm_AMvzb4xJLuNyoIGiPtwMeqcEJMNT81sE",
});
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_register_project_register_project__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_projects_list_projects__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_list_projects_list_projects__["a" /* ListProjectsPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Lista de projetos', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_projects_list_projects__["a" /* ListProjectsPage */] },
            { title: 'Cadastrar Projeto', component: __WEBPACK_IMPORTED_MODULE_4__pages_register_project_register_project__["a" /* RegisterProjectPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.userToken = localStorage.getItem('token');
            if (_this.userToken == null) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_list_projects_list_projects__["a" /* ListProjectsPage */]);
            }
            _this.setName();
        });
    };
    MyApp.prototype.setName = function () {
        return localStorage.getItem('name');
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logoutPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
        localStorage.clear();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\projetos\front-end\src\app\app.html"*/'<ion-menu id="myMenu" [content]="content" type="reveal">\n\n\n\n  <ion-content class="menu">\n\n    <ion-list no-lines>\n\n      <ion-avatar item-start>\n\n        <img class="avatar" src="assets/imgs/login.png">\n\n      </ion-avatar>\n\n      <label>{{ setName() }}</label>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n          <ion-icon name="list-box"></ion-icon>\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n    <ion-icon name="log-out" class="exit-icon" menuClose (click)="logoutPage()"></ion-icon>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content></ion-nav>'/*ion-inline-end:"C:\projetos\front-end\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\projetos\front-end\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"C:\projetos\front-end\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\projetos\front-end\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\projetos\front-end\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastPresentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToastPresentProvider = /** @class */ (function () {
    function ToastPresentProvider(http, toastCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        console.log('Hello ToastPresentProvider Provider');
    }
    ToastPresentProvider.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top',
            cssClass: 'toast-custom',
            showCloseButton: true,
            closeButtonText: 'x'
        });
        toast.present();
    };
    ToastPresentProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]])
    ], ToastPresentProvider);
    return ToastPresentProvider;
}());

//# sourceMappingURL=toast-present.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListProjectsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_project_register_project__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_present_toast_present__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListProjectsPage = /** @class */ (function () {
    function ListProjectsPage(navCtrl, navParams, serviceProvider, menuCtrl, toastprovider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceProvider = serviceProvider;
        this.menuCtrl = menuCtrl;
        this.toastprovider = toastprovider;
        this.token = localStorage.getItem('token');
        this.menuCtrl.enable(true, 'myMenu');
        this.initializeItems();
    }
    ListProjectsPage_1 = ListProjectsPage;
    ListProjectsPage.prototype.ionViewDidEnter = function () {
        this.listProject = [];
        this.loadListProjects();
    };
    ListProjectsPage.prototype.loadListProjects = function () {
        var _this = this;
        this.serviceProvider.getListProjects().subscribe(function (res) {
            _this.listProject = res.body.projects;
            // localStorage.setItem('token',  res.token(this.listProject));
            console.log("list", _this.listProject);
        }, function (err) {
            console.log("Error", err.status);
            _this.toastprovider.presentToast(err.error.error);
        });
    };
    ListProjectsPage.prototype.editProject = function (project) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_project_register_project__["a" /* RegisterProjectPage */], {
            obj: project
        });
        console.log("projectSelected", project);
    };
    ListProjectsPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    ListProjectsPage.prototype.removeProject = function (item) {
        var _this = this;
        this.serviceProvider.removeProject(item._id).subscribe(function (res) {
            _this.toastprovider.presentToast('Projeto removido com sucesso!');
            _this.loadListProjects();
            _this.navCtrl.setRoot(ListProjectsPage_1);
        }, function (err) {
            _this.toastprovider.presentToast(err.error.error);
        });
    };
    ListProjectsPage.prototype.initializeItems = function () {
        this.items = this.listProject;
    };
    ListProjectsPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.isItemAvailable = true;
            this.items = this.items.filter(function (item) {
                return (item.title.toString().toLowerCase().indexOf(val.toString().toLowerCase()) > -1);
            });
        }
    };
    ListProjectsPage = ListProjectsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list-projects',template:/*ion-inline-start:"C:\projetos\front-end\src\pages\list-projects\list-projects.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button class="iconMenu" ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Lista de Projetos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="content-page" padding>\n\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let item of items">\n\n      <ion-item>\n\n        <ion-card class="card-proj" (click)="editProject(item)">\n\n          <ion-card-header>\n\n            <ion-row>\n\n              <ion-col col-2>\n\n                <img class="img-card" src="assets/imgs/clipboard.png" />\n\n              </ion-col>\n\n              <ion-col col-10>\n\n                <ion-card-title class="text-card">{{ item.title }}</ion-card-title>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            <p class="description-card">{{ item.description }}</p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-item>\n\n      <ion-item-options>\n\n        <button ion-button (click)="removeProject(item)">Delete</button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n\n\n\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\projetos\front-end\src\pages\list-projects\list-projects.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_toast_present_toast_present__["a" /* ToastPresentProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_toast_present_toast_present__["a" /* ToastPresentProvider */]) === "function" && _e || Object])
    ], ListProjectsPage);
    return ListProjectsPage;
    var ListProjectsPage_1, _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=list-projects.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_user_new_user__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_password_forgot_password__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_projects_list_projects__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_toast_present_toast_present__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_loading_controller_loading_controller__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, http, toastprovider, menuCtrl, loadingcontroller) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastprovider = toastprovider;
        this.menuCtrl = menuCtrl;
        this.loadingcontroller = loadingcontroller;
        this.url = 'http://localhost:3000';
        this.menuCtrl.enable(false, 'myMenu');
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.newUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__new_user_new_user__["a" /* NewUserPage */]);
    };
    LoginPage.prototype.openResetPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
    };
    LoginPage.prototype.openLogin = function (email, password) {
        var _this = this;
        var objUser = {
            email: email,
            password: password
        };
        if (this.validForm()) {
            this.http.post(this.url + "/auth/authenticate", objUser).subscribe(function (res) {
                _this.loadingcontroller.present();
                try {
                    _this.setName();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__list_projects_list_projects__["a" /* ListProjectsPage */]);
                    _this.loadingcontroller.stopLoader();
                    localStorage.setItem('name', res.user.name);
                    localStorage.setItem('email', res.user.email);
                    localStorage.setItem('token', res.token);
                }
                catch (err) {
                }
                console.log(res);
            }, function (err) {
                _this.toastprovider.presentToast(err.error.error);
            });
        }
    };
    LoginPage.prototype.openPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__list_projects_list_projects__["a" /* ListProjectsPage */]);
    };
    LoginPage.prototype.validForm = function () {
        if (this.email == null || this.email == "") {
            this.toastprovider.presentToast('Campo Email obrigatório.');
            return false;
        }
        if (this.password == null || this.password == "") {
            this.toastprovider.presentToast('Campo Senha obrigatório.');
            return false;
        }
        return true;
    };
    LoginPage.prototype.setName = function () {
        this.user = localStorage.getItem('name');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\projetos\front-end\src\pages\login\login.html"*/'<ion-content padding>\n\n <img src="assets/imgs/login.png">\n\n\n\n \n\n <div>\n\n    <input type="text" name="fname" [(ngModel)]="email" placeholder="Email" required>\n\n  </div>\n\n  <div>\n\n    <input type="password" name="fname" [(ngModel)]="password" placeholder="Senha" required>\n\n    <label class="reset-password" (click)="openResetPassword()">Esqueceu a senha?</label>\n\n  </div>\n\n  <button ion-button class="login-button" (click)="openLogin(email, password)">LOGAR\n\n    \n\n  </button>\n\n  <p>\n\n    <button ion-button class="new-user-button" (click)="newUser()">CRIAR CONTA</button>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\projetos\front-end\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__providers_toast_present_toast_present__["a" /* ToastPresentProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_toast_present_toast_present__["a" /* ToastPresentProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__providers_loading_controller_loading_controller__["a" /* LoadingControllerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_loading_controller_loading_controller__["a" /* LoadingControllerProvider */]) === "function" && _f || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterProjectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_projects_list_projects__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_present_toast_present__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the RegisterProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterProjectPage = /** @class */ (function () {
    function RegisterProjectPage(navCtrl, navParams, http, serviceProvider, toastprovider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.serviceProvider = serviceProvider;
        this.toastprovider = toastprovider;
    }
    RegisterProjectPage.prototype.ionViewDidLoad = function () {
        this.initVariables();
        this.checkIfEditingOrSubscribing();
    };
    RegisterProjectPage.prototype.initVariables = function () {
        this.isEdit = false;
        this.buttonName = "Cadastrar";
        this.titleScreen = "Cadastrar Projeto";
        this.tasksSelected = [];
        this.setTaks();
    };
    RegisterProjectPage.prototype.setTaks = function () {
        this.tasks = [
            {
                title: "Tarefa Front End 1",
                assignedTo: "5dd82ce42cf5ad0172e47491"
            },
            {
                title: "Tarefa Front End 2",
                assignedTo: "5dd82ce42cf5ad0172e47491"
            },
            {
                title: "Tarefa Front End 3",
                assignedTo: "5dd82ce42cf5ad0172e47491"
            },
        ];
    };
    RegisterProjectPage.prototype.checkIfEditingOrSubscribing = function () {
        var project = this.getParamsScreen();
        if (project !== null && project !== undefined) {
            this.title = project.title;
            this.description = project.description;
            this.buttonName = "Editar";
            this.titleScreen = "Editar Projeto";
            this.idProjectSelect = project._id;
            this.isEdit = true;
            this.tasksSelected = project.tasks;
        }
        else {
            this.isEdit = false;
        }
    };
    RegisterProjectPage.prototype.getParamsScreen = function () {
        return this.navParams.get('obj');
    };
    RegisterProjectPage.prototype.actionButton = function (title, description) {
        if (this.validForm()) {
            if (this.isEdit === true) {
                this.editProject(title, description);
                this.navCtrl.pop();
            }
            else {
                this.saveProject(title, description);
            }
        }
    };
    RegisterProjectPage.prototype.saveProject = function (title, description) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var project;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("entrou no Cadastrar");
                        project = {
                            title: title,
                            description: description,
                            tasks: this.tasksSelected
                        };
                        console.log("Project", project);
                        if (!this.validForm()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.serviceProvider.registerProject(project).subscribe(function (res) {
                                console.log("response", res);
                                console.log("body", res.body);
                                console.log("status", res.headers.status);
                                _this.toastprovider.presentToast('Novo projeto salvo com sucesso!');
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__list_projects_list_projects__["a" /* ListProjectsPage */]);
                            }, function (err) {
                                _this.toastprovider.presentToast(err.error.error);
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    RegisterProjectPage.prototype.editProject = function (title, description) {
        var _this = this;
        console.log("entrou no editar");
        var task = {
            title: "tarefa front end",
            assignedTo: "5dd82ce42cf5ad0172e47491"
        };
        this.tasks.push(task);
        var project = {
            id: this.idProjectSelect,
            title: title,
            description: description,
            tasks: this.tasksSelected
        };
        this.serviceProvider.editProject(project).subscribe(function (res) {
            try {
                _this.toastprovider.presentToast('Projeto editado com sucesso!');
            }
            catch (err) {
            }
        }, function (err) {
            _this.toastprovider.presentToast(err.error.error);
        });
    };
    RegisterProjectPage.prototype.validForm = function () {
        if (this.title == null || this.title == "" || this.title == undefined) {
            this.toastprovider.presentToast('Campo Titulo obrigatório.');
            return false;
        }
        if (this.description == null || this.description == "" || this.description == undefined) {
            this.toastprovider.presentToast('Campo Descrição obrigatório.');
            return false;
        }
        if (this.tasksSelected.length == 0 || this.tasksSelected == undefined) {
            this.toastprovider.presentToast('Campo Ativiades obrigatório.');
            return false;
        }
        return true;
    };
    RegisterProjectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register-project',template:/*ion-inline-start:"C:\projetos\front-end\src\pages\register-project\register-project.html"*/'<!--\n\n  Generated template for the RegisterProjectPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button class="iconMenu" ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{ titleScreen }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="content-form" padding>\n\n\n\n  <ion-label class="label-form" >Titulo: </ion-label>\n\n  <input class="input-form" type="text" name="fname" [(ngModel)]="title" placeholder="Titulo" >\n\n  <ion-label class="label-form">Descrição: </ion-label>\n\n  <!-- <input type="text" name="fname" [(ngModel)]="description"> -->\n\n  \n\n    <ion-textarea  class="description-form" [(ngModel)]="description" placeholder="Descrição..."></ion-textarea>\n\n  \n\n\n\n  <ion-label class="label-form">Atividades: </ion-label>\n\n  <div class="select-task">\n\n    <ion-item class="task-form">\n\n      <!-- <ion-label class="labelForm" >Atividades</ion-label> -->\n\n      <ion-select placeholder="Selecione as atividades" [(ngModel)]="tasksSelected" multiple="true" >\n\n          <ion-option *ngFor=" let task of tasks" [value]="task" >{{task.title}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n  </div>\n\n\n\n  <button class="buttonSave" (click)="actionButton(title,description)" ion-button> {{ buttonName }}</button>\n\n</ion-content>'/*ion-inline-end:"C:\projetos\front-end\src\pages\register-project\register-project.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__providers_toast_present_toast_present__["a" /* ToastPresentProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_toast_present_toast_present__["a" /* ToastPresentProvider */]) === "function" && _e || Object])
    ], RegisterProjectPage);
    return RegisterProjectPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=register-project.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(256);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};



/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServiceProvider = /** @class */ (function () {
    function ServiceProvider(http) {
        this.http = http;
        console.log('Hello ServiceProvider Provider');
    }
    ServiceProvider.prototype.registerProject = function (project) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* apiConfig */].BASE_URL + "/projects", project, { headers: __WEBPACK_IMPORTED_MODULE_2__environments_environment__["b" /* header */], observe: 'response' });
    };
    ServiceProvider.prototype.getListProjects = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* apiConfig */].BASE_URL + "/projects", { headers: __WEBPACK_IMPORTED_MODULE_2__environments_environment__["b" /* header */], observe: 'response' });
    };
    ServiceProvider.prototype.editProject = function (project) {
        //Retira o atributo id do objeto.
        var id = project.id, projectData = __rest(project, ["id"]);
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* apiConfig */].BASE_URL + "/projects/" + id, projectData, { headers: __WEBPACK_IMPORTED_MODULE_2__environments_environment__["b" /* header */], observe: 'response' });
    };
    ServiceProvider.prototype.removeProject = function (id) {
        //Retira o atributo id do objeto.
        // let { id, ...projectData } = project;
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* apiConfig */].BASE_URL + "/projects/" + id, { headers: __WEBPACK_IMPORTED_MODULE_2__environments_environment__["b" /* header */], observe: 'response' });
    };
    ServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], ServiceProvider);
    return ServiceProvider;
    var _a;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingControllerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoadingControllerProvider = /** @class */ (function () {
    function LoadingControllerProvider(http, loadingCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
    }
    LoadingControllerProvider.prototype.stopLoader = function () {
        if (this.loading && this.loading.instance) {
            this.loading.dismiss();
            this.loading = null;
        }
    };
    LoadingControllerProvider.prototype.present = function () {
        this.stopLoader();
        this.loading = this.loadingCtrl.create({
            content: ''
        });
        this.loading.present();
    };
    LoadingControllerProvider.prototype.dismiss = function () {
        this.stopLoader();
    };
    LoadingControllerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
    ], LoadingControllerProvider);
    return LoadingControllerProvider;
}());

//# sourceMappingURL=loading-controller.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map