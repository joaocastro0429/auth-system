import { Controller, Post, Body, ForbiddenException, Get, Headers } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService,
    private readonly jwtService: JwtService,  // Injete o JwtService aqui
  ) {}

  @Post('login')
  async login(@Body() data: CreateUserDto) {
    const token = await this.userService.login(data);
    return { access_token: token };
  }
  @Post('register')
  async register(@Body() data: CreateUserDto) {
    return this.userService.register(data);
  }

  @Post('reset')
  async resetPassword(@Body() data: CreateUserDto) {
    return this.userService.resetPassword(data);
  }

  @Get('admin-only')
async getAdminContent(@Headers('authorization') authHeader: string) {
  // Verifica se o cabeçalho Authorization foi enviado
  if (!authHeader) {
    throw new ForbiddenException('Token não enviado');
  }

  // Remove o "Bearer" do token
  const token = authHeader.replace('Bearer ', '');

  let payload;
  try {
    // Verifica a validade do token
    payload = this.jwtService.verify(token); // Valida o token JWT
  } catch (error) {
    throw new ForbiddenException('Token inválido');
  }

  // Verifica se o usuário tem a permissão de administrador
  if (payload.role !== 'ADMIN') {
    throw new ForbiddenException('Acesso negado');
  }

  return { message: 'Bem-vindo, admin!' }; // Acesso permitido, retorna a resposta
}


}

