/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */

import {
  Controller, Get, Post, Body, Put, Delete, Param,
} from '@nestjs/common';
import { UserDto } from './user-module.dto';
import UserModuleService from './user-module.service';
@Controller('user')
export class UserModuleController {
  @Get()
  get() {
    return UserModuleService.getUser();
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
