/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import { Injectable } from '@nestjs/common';
import connection from '../database/connection';

@Injectable()
class UserModuleService {
  // connect with database
  async getUser(payload: any) {
    const { page } = payload;
    let response;
    if (page >= 1) {
      response = await connection('user')
        .limit(10)
        .offset((page - 1) * 10)
        .select('*')
        .orderBy('id');
      return response;
    }
    response = await connection('user')
      .select('*')
      .orderBy('id');
    return response
  }

  async getTransactionsById(id, query) {
    if(query.start && query.end) {
      const response = await connection('transactions')
      .where('user_id', id)
      .limit(50)
      .where('date', '>=', new Date(query.start))
      .where('date', '<', new Date(query.end))
      return response;
    }
    const response = await connection('transactions')
      .where('user_id', id)
      .limit(50)
    return response;
  }

  async getTransactions(query) {
      if(query.start && query.end)  {
      const response = await connection('transactions')
      .where('date', '>=', new Date(query.start))
      .where('date', '<', new Date(query.end))
      return response;
    }
      const response = await connection('transactions')
      return response;
  }

  async postTransactions(payload) {
    const response = await connection('transactions')
      .insert(payload)
      .returning('*')

    payload.moneyQuantity = payload.quantity
    delete payload.quantity
    this.updateMoneyQuantity(payload, payload.user_id)
    
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

  async updateMoneyQuantity(payload, id) {
    const [userMoney] = await connection('user')
      .where('id', id)
      .select('moneyQuantity')

    const moneySaved = Number(userMoney.moneyQuantity)
    const moneyInputed = Number(payload.moneyQuantity);

    const response = await connection('user')
      .where('id', id)
      .update({ moneyQuantity: moneySaved + moneyInputed })
      .returning('*')

    return response;
  }
}

export default new UserModuleService();
