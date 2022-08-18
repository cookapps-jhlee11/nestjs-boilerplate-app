import { Repository } from 'typeorm';
import { UsersDTO } from './dto/create-user.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    create(createUserDto: UsersDTO): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(email: string): Promise<Record<string, any>>;
    remove(id: string): Promise<void>;
    register(body: any): Promise<Record<string, any>>;
}
