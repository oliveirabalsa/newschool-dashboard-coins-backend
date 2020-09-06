declare class UserModuleService {
    getUser(payload: any): Promise<any>;
    getTransactionsById(id: any, query: any): Promise<any>;
    getTransactions(query: any): Promise<any>;
    postTransactions(payload: any): Promise<any>;
    putTransactions(id: any, payload: any): Promise<any>;
    deleteTransactions(id: any): Promise<any>;
    getMoney(id: any): Promise<any>;
    postUser(payload: any): Promise<any>;
    putUser(payload: any, id: any): Promise<any>;
    deleteUser(id: any): Promise<any>;
    updateMoneyQuantity(payload: any, id: any): Promise<any>;
}
declare const _default: UserModuleService;
export default _default;
