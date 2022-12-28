/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 49:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FiveMAdaptater = void 0;
class FiveMAdaptater {
    constructor() {
        if (FiveMAdaptater._instance) {
            throw new Error('Error: Instantiation failed: Use FiveMAdaptater.Instance instead of new.');
        }
        FiveMAdaptater._instance = this;
    }
    _construct() {
        return FiveMAdaptater.Instance;
    }
    static get Instance() {
        return this._instance;
    }
    on(event, callback) {
    }
    onNet(event, callback) {
    }
    emit(event, data) {
        throw new Error('Method not implemented.');
    }
    emitNet(event, data) {
        throw new Error('Method not implemented.');
    }
}
exports.FiveMAdaptater = FiveMAdaptater;
FiveMAdaptater._instance = new FiveMAdaptater();


/***/ }),

/***/ 590:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const app_service_1 = __webpack_require__(979);
const core_1 = __webpack_require__(532);
class AppController extends core_1.Core {
    constructor(appService = new app_service_1.AppService()) {
        super();
        this.appService = appService;
        core_1.Core.sdk.on('onClientResourceStart', this.appService.onClientResourceStart);
    }
}
exports.AppController = AppController;


/***/ }),

/***/ 20:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const core_1 = __webpack_require__(532);
const _core_1 = __webpack_require__(532);
const app_controller_1 = __webpack_require__(590);
class AppModule extends app_controller_1.AppController {
    constructor(sdk) {
        core_1.Core.sdk = sdk;
        core_1.Core.threads = new _core_1.ThreadManager();
        core_1.Core.modules = new _core_1.ModulesManager();
        super();
        this.modules = [];
    }
}
exports.AppModule = AppModule;


/***/ }),

/***/ 979:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
class AppService {
    onClientResourceStart() {
        console.log('onClientResourceStart');
    }
}
exports.AppService = AppService;


/***/ }),

/***/ 532:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModulesManager = exports.ThreadManager = exports.Core = void 0;
const threads_1 = __webpack_require__(410);
Object.defineProperty(exports, "ThreadManager", ({ enumerable: true, get: function () { return threads_1.ThreadManager; } }));
const modules_1 = __webpack_require__(345);
Object.defineProperty(exports, "ModulesManager", ({ enumerable: true, get: function () { return modules_1.ModulesManager; } }));
class Core {
}
exports.Core = Core;


/***/ }),

/***/ 345:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModulesManager = void 0;
const _core_1 = __webpack_require__(532);
class ModulesManager extends _core_1.Core {
    constructor(modules = []) {
        super();
        this.modules = modules;
        this.modules = modules;
    }
    onStart() {
        this.modules.forEach((module) => {
            _core_1.Core.threads.add(module.name, module.thread);
            module.onStart();
        });
    }
}
exports.ModulesManager = ModulesManager;


/***/ }),

/***/ 410:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ThreadManager = void 0;
class ThreadManager {
    add(name, thread) {
        console.log('add');
    }
}
exports.ThreadManager = ThreadManager;


/***/ }),

/***/ 447:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.App = void 0;
const app_module_1 = __webpack_require__(20);
const core_1 = __webpack_require__(532);
class App extends app_module_1.AppModule {
    constructor(sdk) {
        super(sdk);
    }
    start() {
        core_1.Core.modules.onStart.bind(this);
    }
}
exports.App = App;


/***/ }),

/***/ 231:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const fivem_adaptater_1 = __webpack_require__(49);
const app_1 = __webpack_require__(447);
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = new app_1.App(fivem_adaptater_1.FiveMAdaptater.Instance);
        app.start();
    });
}
bootstrap();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(231);
/******/ 	
/******/ })()
;