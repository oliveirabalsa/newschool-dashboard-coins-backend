/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import { Injectable } from '@nestjs/common';
import connection from '../database/connection';

@Injectable()
class UserModuleService {
  // connect with database
  async getUser(page: number = 1) {
    const response = await connection('user')
      .limit(10)
      .offset((page - 1) * 10)
      .select('*')
      .orderBy('id');
    return response;
  }

  async getTransactions(id, start, end) {
    const response = await connection('transactions')
      .where('user_id', id)
      .limit(50)
      .offset(Number(end) - Number(start))
    return response;
  }

  async postTransactions(payload) {
    const response = await connection('transactions')
      .insert(payload)
      .returning('*')
    return response;
  }

  async putTransactions(id, payload) {
    const response = await connection('transactions')
      .where('id', id)
      .update(payload);
    return response;
  }

  async deleteTransactions(id) {
    const response = await connection('user')
      .where('id', id)
      .delete();
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

  async deleteUser(id) {
    const response = await connection('user')
      .where('id', id)
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
