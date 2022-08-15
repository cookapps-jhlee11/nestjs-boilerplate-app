import { UsersService } from './users.service';
import { UsersDTO } from './dto/create-user.dto';
import { User } from './entities/user.entity';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<User[]>;
    register(req: any, res: any, body: UsersDTO): Promise<void>;
}
