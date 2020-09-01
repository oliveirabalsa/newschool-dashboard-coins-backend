declare class UserModuleService {
    getUser(): Promise<any>;
    postUser(payload: any): Promise<any>;
    putUser(payload: any, id: any): Promise<any>;
    deleteUser(payload: any): Promise<any>;
    putMoneyQuantity(payload: any, id: any): Promise<any>;
}
declare const _default: UserModuleService;
export default _default;
