import { UserDto } from './DTO/user-module.dto';
import { TransactionDto } from './DTO/user-module.dto';
export declare class UserModuleController {
    get(page: object): Promise<any>;
    getTransactionsById(params: any, start: any, end: any): Promise<any>;
    postTransactions(transaction: TransactionDto): Promise<any>;
    updateTransactions(transaction: TransactionDto, params: any): Promise<any>;
    deleteTransactions(Params: any): Promise<any>;
    getMoney(Params: any): Promise<any>;
    create(User: UserDto): Promise<any>;
    update(params: any, User: UserDto): Promise<any>;
    updateMoneyQuantity(params: any, Money: any): Promise<any>;
    delete(params: any): Promise<any>;
}
