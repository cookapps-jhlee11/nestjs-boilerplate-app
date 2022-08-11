import { Body, Controller, Get, Post, Req, Res} from '@nestjs/common';
import { UsersService } from './users/users.service';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private userService : UsersService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('register')
  async register(@Req() req, @Res() res, @Body() body){
    const reg = await this.userService.register(body);
    res.status(reg.status).json(reg.content);
  }
}

