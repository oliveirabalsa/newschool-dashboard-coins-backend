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
    async getUser(payload) {
        const { page } = payload;
        let response;
        if (page >= 1) {
            response = await connection_1.default('user')
                .limit(10)
                .offset((page - 1) * 10)
                .select('*')
                .orderBy('id');
            return response;
        }
        response = await connection_1.default('user')
            .select('*')
            .orderBy('id');
        return response;
    }
    async getTransactionsById(id, query) {
        if (query.start && query.end) {
            const response = await connection_1.default('transactions')
                .where('user_id', id)
                .limit(50)
                .where('date', '>=', new Date(query.start))
                .where('date', '<', new Date(query.end));
            return response;
        }
        const response = await connection_1.default('transactions')
            .where('user_id', id)
            .limit(50);
        return response;
    }
    async getTransactions(query) {
        if (query.start && query.end) {
            const response = await connection_1.default('transactions')
                .where('date', '>=', new Date(query.start))
                .where('date', '<', new Date(query.end));
            return response;
        }
        const response = await connection_1.default('transactions');
        return response;
    }
    async postTransactions(payload) {
        const response = await connection_1.default('transactions')
            .insert(payload)
            .returning('*');
        payload.moneyQuantity = payload.quantity;
        delete payload.quantity;
        this.updateMoneyQuantity(payload, payload.user_id);
        return response;
    }
    async putTransactions(id, payload) {
        const response = await connection_1.default('transactions')
            .where('id', id)
            .update(payload);
        return response;
    }
    async deleteTransactions(id) {
        const response = await connection_1.default('user')
            .where('id', id)
            .delete();
        return response;
    }
    async getMoney(id) {
        return await connection_1.default('user')
            .select('user.moneyQuantity')
            .where('id', id);
    }
    async postUser(payload) {
        const response = await connection_1.default('user')
            .returning('*')
            .insert(payload);
        return response;
    }
    async putUser(payload, id) {
        const response = await connection_1.default('user')
            .where('id', id)
            .update(payload);
        return response;
    }
    async deleteUser(id) {
        const response = await connection_1.default('user')
            .where('id', id)
            .delete();
        return response;
    }
    async updateMoneyQuantity(payload, id) {
        const [userMoney] = await connection_1.default('user')
            .where('id', id)
            .select('moneyQuantity');
        const moneySaved = Number(userMoney.moneyQuantity);
        const moneyInputed = Number(payload.moneyQuantity);
        const response = await connection_1.default('user')
            .where('id', id)
            .update({ moneyQuantity: moneySaved + moneyInputed })
            .returning('*');
        return response;
    }
};
UserModuleService = __decorate([
    common_1.Injectable()
], UserModuleService);
exports.default = new UserModuleService();
//# sourceMappingURL=user-module.service.js.map