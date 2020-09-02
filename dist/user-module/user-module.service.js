"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const connection_1 = require("../database/connection");
let UserModuleService = class UserModuleService {
    async getUser() {
        const response = await connection_1.default('user').select('*');
        return response;
    }
    async getTransactions(id, query) {
        const response = await connection_1.default('user').where('id', id)
            .where('id', '>=', query.start).where('id', '<=', query.end).select('*');
        return response;
    }
    async getMoney(id) {
        return await connection_1.default('user').select('user.moneyQuantity').where('id', id);
    }
    async postUser(payload) {
        const response = await connection_1.default('user').returning('*').insert(payload);
        return response;
    }
    async putUser(payload, id) {
        const response = await connection_1.default('user').where('id', id).update(payload);
        return response;
    }
    async deleteUser(payload) {
        const response = await connection_1.default('user').where('id', payload.id).delete();
        return response;
    }
    async putMoneyQuantity(payload, id) {
        const response = await connection_1.default('user').where('id', id).update(payload);
        return response;
    }
};
UserModuleService = __decorate([
    common_1.Injectable()
], UserModuleService);
exports.default = new UserModuleService();
//# sourceMappingURL=user-module.service.js.map