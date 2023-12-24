import { User } from 'src/user/entity/user.entity';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate({ login, id }: Pick<User, 'login' | 'id'>): Promise<{
        login: string;
        id: number;
    }>;
}
export {};
