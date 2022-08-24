import { UsersService } from './users.service';
import { UsersDTO } from './dto/create-user.dto';
import { User } from './entities/user.entity';
declare class Email {
    email: string;
}
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<User[]>;
    findUser(req: any, res: any, body: Email): Promise<void>;
    register(req: any, res: any, body: UsersDTO): Promise<void>;
}
export {};
