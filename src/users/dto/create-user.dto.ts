import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class UsersDTO {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({example:'jhlee11@cookapps.com', description:'E-mail'})
  email: string;

  @ApiProperty()
  @IsOptional()
  address?:string;

  @IsOptional()
  @IsString()
  @ApiProperty({example:'Jeonghun Lee', description:'The name of the user'})
  name?: string;

  @IsNotEmpty()
  @ApiProperty({example:'passw@rd', description:'password of the user'})
  @IsString()
  password: string;
}
