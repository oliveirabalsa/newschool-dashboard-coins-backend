"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_controller_1 = require("./user-module/user-module.controller");
const user_module_module_1 = require("./user-module/user-module.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [user_module_module_1.UserModuleModule],
        controllers: [app_controller_1.AppController, user_module_controller_1.UserModuleController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.default = AppModule;
//# sourceMappingURL=app.module.js.map