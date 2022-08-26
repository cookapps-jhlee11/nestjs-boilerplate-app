import { Body, ConsoleLogger, Controller, Get, Post, Req, Res} from '@nestjs/common';
import { UsersService } from './users/users.service';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private userService : UsersService) {}

  @Get('/')
  getHello(@Res() res)  {
    const result = this.appService.getHello();
    res.status(200).json(result);
  }
}

