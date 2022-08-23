import { Role } from '../enums/role.enum';
export declare class User {
    id: number;
    name: string;
    address: string;
    gender: string;
    email: string;
    password: string;
    isActive: boolean;
    roles: Role[];
}
