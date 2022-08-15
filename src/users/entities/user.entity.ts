import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Role } from '../enums/role.enum';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
@Unique(['email'])
export class User {

  @PrimaryGeneratedColumn()
  @ApiProperty({example: 1, description:'Auto-Created by DB'})
  id: number;

  @ApiProperty({example:'Jeonghun Lee', description:'The name of the user'})
  @Column()
  name: string;

  @ApiProperty({example: 'Seoul-si', description:'The address of the user'})
  @Column({nullable:true})
  address: string;

  @ApiProperty({example: 'male', description:'The gender of the user'})
  @Column({nullable:true})
  gender: string;

  @ApiProperty({example:'jhlee11@cookapps.com', description:'E-mail'})
  @Column()
  email: string;

  @Column()
  @ApiProperty({example:'passw@rd', description:'password of the user'})
  password: string;

  @Column({ default: true })
  @ApiProperty({example:true, description:''})
  isActive: boolean;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.standard,
  })
  @ApiProperty({example:Role, description:'Users Role'})
  roles: Role[];
}
