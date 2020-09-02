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
import UserModuleService from './user-module.service';
import { query } from 'express';
@Controller('user')
export class UserModuleController {
  @Get()
  get() {
    return UserModuleService.getUser();
  }

  @Get('transactions/:id')
  getTransactions(@Param() Params: any, @Query() query: any) {
    return UserModuleService.getTransactions(Params.id, query);
  }

  @Get('money/:id')
  getMoney(@Param() Params: any) {
    return UserModuleService.getMoney(Params.id);
  }

  @Post()
  create(@Body() User: UserDto) {
    return UserModuleService.postUser(User);
  }
  
  @Get('money/:id')
  getMoney(@Param() params) {
    return UserModuleService.getMoney(params.id);
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
