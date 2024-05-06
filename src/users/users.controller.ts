import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';
import { UsersDTO } from './users.dto';
import { Users } from './users.entity';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ){}

    // @Get()
    // async getUsers(@Res() response: Response) {
    //     const users = await this.usersService.findAll();
    //     return response.status(200).json(users);
    // }

    @Get()
    findAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }

    @Post()
    async createUser(@Res() response: Response, @Body() userDTO: UsersDTO){
        const userCreate = await this.usersService.createUser(userDTO);
        return  response.status(201).json(userCreate);
    }
}
