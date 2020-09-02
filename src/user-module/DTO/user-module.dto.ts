import { IsNotEmpty, IsString, IsArray, IsDateString } from 'class-validator';

/* eslint-disable import/prefer-default-export */
export class TransactionDto {
  @IsNotEmpty()
  @IsDateString()
  date: string;

  @IsNotEmpty()
  @IsString()
  quantity: string;
  
  @IsNotEmpty()
  @IsString()
  admin: string;
  
  @IsNotEmpty()
  @IsString()
  user_id: string;
}

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
}
