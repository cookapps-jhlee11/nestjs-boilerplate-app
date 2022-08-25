import { UsersService } from './users/users.service';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    private userService;
    constructor(appService: AppService, userService: UsersService);
    getHello(res: any): void;
}
