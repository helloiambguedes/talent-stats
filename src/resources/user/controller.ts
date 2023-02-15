import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from '../../dtos/create-user.dto';
import { UserService } from './service';

@Controller("/user")
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post()
  getHello(): string {
    return "I'm alive";
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDTO): Promise<string> {
    try {
      await this.service.addUser(createUserDto);
      return "ok";
    }
    catch {
      return "failed"
    }
  }
}
