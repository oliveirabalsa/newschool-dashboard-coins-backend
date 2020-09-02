import { UserDto } from './DTO/user-module.dto';
export declare class UserModuleController {
    get(): Promise<any>;
    getTransactions(Params: any, query: any): Promise<any>;
    create(User: UserDto): Promise<any>;
    getMoney(params: any): Promise<any>;
    update(params: any, User: UserDto): Promise<any>;
    updateMoneyQuantity(params: any, Money: any): Promise<any>;
    delete(params: any): Promise<any>;
}
