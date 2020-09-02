import { IsNotEmpty, IsString, IsArray } from 'class-validator';

/* eslint-disable import/prefer-default-export */
export class UserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  moneyQuantity: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsArray()
  transactions: string;
}
