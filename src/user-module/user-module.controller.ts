/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */

import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
  Query,
} from '@nestjs/common';
import { UserDto } from './DTO/user-module.dto';
import { TransactionDto } from './DTO/user-module.dto';
import UserModuleService from './user-module.service';
@Controller('user')
export class UserModuleController {
  @Get()
  get() {
    return UserModuleService.getUser();
  }

  @Get('transactions/:id')
  getTransactionsById(@Param() params: any, @Query() start: any, end: any) {
    return UserModuleService.getTransactions(params.id, start, end);
  }

  @Post('/transactions')
  postTransactions(@Body() transaction: TransactionDto) {
    return UserModuleService.postTransactions(transaction);
  }

  @Put('transactions/:id')
  updateTransactions(@Body() transaction: TransactionDto, @Param() params: any) {
    return UserModuleService.putTransactions(params.id, transaction);
  }
  @Delete('transactions/:id')
  deleteTransactions(@Param() Params: any) {
    return UserModuleService.deleteTransactions(Params.id);
  }

  @Get('money/:id')
  getMoney(@Param() Params: any) {
    return UserModuleService.getMoney(Params.id);
  }

  @Post()
  create(@Body() User: UserDto) {
    return UserModuleService.postUser(User);
  }
  
  @Put(':id')
  update(@Param() params, @Body() User: UserDto) {
    return UserModuleService.putUser(User, params.id);
  }

  @Put('money/:id')
  updateMoneyQuantity(@Param() params, @Body() Money: any) {
    return UserModuleService.putUser(Money, params.id);
  }

  @Delete(':id')
  delete(@Param() params) {
    return UserModuleService.deleteUser(params.id);
  }
}
