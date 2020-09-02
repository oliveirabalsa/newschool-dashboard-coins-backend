declare class UserModuleService {
    getUser(page?: number): Promise<any>;
    getTransactions(id: any, start: any, end: any): Promise<any>;
    postTransactions(payload: any): Promise<any>;
    putTransactions(id: any, payload: any): Promise<any>;
    deleteTransactions(id: any): Promise<any>;
    getMoney(id: any): Promise<any>;
    postUser(payload: any): Promise<any>;
    putUser(payload: any, id: any): Promise<any>;
    deleteUser(id: any): Promise<any>;
    putMoneyQuantity(payload: any, id: any): Promise<any>;
}
declare const _default: UserModuleService;
export default _default;
