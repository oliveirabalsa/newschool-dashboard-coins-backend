"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModuleController = void 0;
const common_1 = require("@nestjs/common");
const user_module_dto_1 = require("./DTO/user-module.dto");
const user_module_dto_2 = require("./DTO/user-module.dto");
const user_module_service_1 = require("./user-module.service");
let UserModuleController = class UserModuleController {
    get() {
        return user_module_service_1.default.getUser();
    }
    getTransactionsById(params, start, end) {
        return user_module_service_1.default.getTransactions(params.id, start, end);
    }
    postTransactions(transaction) {
        return user_module_service_1.default.postTransactions(transaction);
    }
    updateTransactions(transaction, params) {
        return user_module_service_1.default.putTransactions(params.id, transaction);
    }
    deleteTransactions(Params) {
        return user_module_service_1.default.deleteTransactions(Params.id);
    }
    getMoney(Params) {
        return user_module_service_1.default.getMoney(Params.id);
    }
    create(User) {
        return user_module_service_1.default.postUser(User);
    }
    update(params, User) {
        return user_module_service_1.default.putUser(User, params.id);
    }
    updateMoneyQuantity(params, Money) {
        return user_module_service_1.default.putUser(Money, params.id);
    }
    delete(params) {
        return user_module_service_1.default.deleteUser(params.id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserModuleController.prototype, "get", null);
__decorate([
    common_1.Get('transactions/:id'),
    __param(0, common_1.Param()), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], UserModuleController.prototype, "getTransactionsById", null);
__decorate([
    common_1.Post('/transactions'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_module_dto_2.TransactionDto]),
    __metadata("design:returntype", void 0)
], UserModuleController.prototype, "postTransactions", null);
__decorate([
    common_1.Put('transactions/:id'),
    __param(0, common_1.Body()), __param(1, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_module_dto_2.TransactionDto, Object]),
    __metadata("design:returntype", void 0)
], UserModuleController.prototype, "updateTransactions", null);
__decorate([
    common_1.Delete('transactions/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserModuleController.prototype, "deleteTransactions", null);
__decorate([
    common_1.Get('money/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserModuleController.prototype, "getMoney", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_module_dto_1.UserDto]),
    __metadata("design:returntype", void 0)
], UserModuleController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_module_dto_1.UserDto]),
    __metadata("design:returntype", void 0)
], UserModuleController.prototype, "update", null);
__decorate([
    common_1.Put('money/:id'),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UserModuleController.prototype, "updateMoneyQuantity", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserModuleController.prototype, "delete", null);
UserModuleController = __decorate([
    common_1.Controller('user')
], UserModuleController);
exports.UserModuleController = UserModuleController;
//# sourceMappingURL=user-module.controller.js.map