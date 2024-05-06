import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';
import { UsersDTO } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>
    ) {}

//    async findAll(): Promise<Users[]> {
//      const users = await this.usersRepository.find();
//      return users;
//    }
    async findAll(): Promise<Users[]> {
        return this.usersRepository.find();
    }

   async createUser(userDTO: UsersDTO): Promise<UsersDTO> {
     const createdUser = await this.usersRepository.save(userDTO);
     return createdUser;
   }

   async remove(id: number): Promise<void> {
     await this.usersRepository.delete(id);
   }
}
