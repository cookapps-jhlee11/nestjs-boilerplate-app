import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcryptjs from 'bcryptjs'
import { UsersDTO } from './dto/create-user.dto'
import { User } from './entities/user.entity';
import { validate } from 'class-validator';

// This should be a real class/interface representing a user entity
// export type User = any;

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {}

  create(createUserDto: UsersDTO): Promise<User> {
    const user = new User();

    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.password = createUserDto.password;

    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(email: string): Promise<Record<string, any>> {
    let isOK = true;
    const res = await this.usersRepository.findOne({ email: email }).catch((error) => {
      console.log(error)
      isOK = false;
    });
    console.log(res)
    if (isOK) {
      return { status: 201, content: { msg: res } };
    }
    else {
      return { status: 400, content: { msg: 'User not found' } };
    }

  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async register(body: any): Promise<Record<string, any>> {
    // Validation Flag
    let isOk = false;

    // Transform body into DTO
    const userDTO = new UsersDTO();
    userDTO.email = body.email;
    userDTO.name = body.name;
    userDTO.password = await bcryptjs.hash(body.password, 10);
    // Validate DTO against validate function from class-validator
    await validate(userDTO).then((errors) => {
      if (errors.length > 0) {
        console.debug(`${errors}`);
      } else {
        isOk = true;
      }
    });
    if (isOk) {
      await this.create(userDTO).catch((error) => {
        console.debug(error.message);
        isOk = false;
      });
      if (isOk) {
        return { status: 201, content: { msg: 'User created with success' } };
      } else {
        return { status: 400, content: { msg: 'User already exists' } };
      }
    } else {
      return { status: 400, content: { msg: 'Invalid content' } };
    }
  }
}
