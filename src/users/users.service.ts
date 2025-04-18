import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(data: CreateUserDto) {
    const userHash = await bcrypt.hash(data.password, 10);
    return this.prisma.user.create({
      data: {
        email: data.email,
        password: userHash,
      },
    });
  }

  async login(data: CreateUserDto) {
    // Procurar o usuário pelo e-mail
    const user = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      throw new Error("User Not Found");
    }

    // Comparar a senha fornecida com a senha criptografada armazenada no banco
    const passwordValid = await bcrypt.compare(data.password, user.password);

    if (!passwordValid) {
      throw new Error("Invalid credentials");
    }

    // Gerar o token JWT
    return this.jwtService.sign({ userId: user.id, email: user.email });
  }
}
