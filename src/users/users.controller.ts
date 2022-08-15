import { Controller, Post, Req, Res, Body, Get } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiBearerAuth, ApiResponse, ApiBody } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UsersDTO } from './dto/create-user.dto'
import { User } from './entities/user.entity'


@ApiBearerAuth()
@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private usersService : UsersService){}

    @Get()
    @ApiOperation({summary: "유저정보"})
    @ApiResponse({status:200, type:User})
    async findAll(): Promise<User[]>{
        return this.usersService.findAll();
    }


    @Post('register')
    @ApiOperation({summary: "회원가입"})
    @ApiResponse({status:403, description: 'forbidden'})
    @ApiResponse({status:200, type:UsersDTO})
    async register(@Req() req, @Res() res, @Body() body:UsersDTO){
        const reg = await this.usersService.register(body)
        res.status(reg.status).json(reg.content)   ;
    }

}
