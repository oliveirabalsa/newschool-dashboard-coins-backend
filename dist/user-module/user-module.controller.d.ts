import { UserDto } from './user-module.dto';
export declare class UserModuleController {
    get(): Promise<any>;
    create(User: UserDto): Promise<any>;
    update(params: any, User: UserDto): Promise<any>;
    updateMoneyQuantity(params: any, Money: any): Promise<any>;
    delete(params: any): Promise<any>;
}
