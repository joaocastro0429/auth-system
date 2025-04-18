import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('login')
  async login(@Body() data: CreateUserDto) {
    const token = await this.userService.login(data);
    return { access_token: token };
  }

  @Post('register')
  async register(@Body() data: CreateUserDto) {
    return this.userService.register(data);
  }
}
