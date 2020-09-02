/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import { Injectable } from '@nestjs/common';
import connection from '../database/connection';

@Injectable()
class UserModuleService {
  // connect with database
  async getUser() {
    const response = await connection('user').select('*');
    return response;
  }

  async getTransactions(id, query) {
    const response = await connection('user')
      .where('id', id)
      .where('id', '>=', query.start)
      .where('id', '<=', query.end)
      .select('user.transactions');
    return response;
  }

  async getMoney(id) {
    return await connection('user')
      .select('user.moneyQuantity')
      .where('id', id);
  }

  async postUser(payload) {
    const response = await connection('user')
      .returning('*')
      .insert(payload);
    return response;
  }

  async putUser(payload, id) {
    const response = await connection('user')
      .where('id', id)
      .update(payload);
    return response;
  }

  async deleteUser(payload) {
    const response = await connection('user')
      .where('id', payload.id)
      .delete();
    return response;
  }

  async putMoneyQuantity(payload, id) {
    const response = await connection('user')
      .where('id', id)
      .update(payload);
    return response;
  }
}

export default new UserModuleService();
