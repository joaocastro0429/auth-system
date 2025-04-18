import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[ 
    JwtModule.register({
      secret: process.env.SECRET_TOKEN, // 🔐 Use uma variável de ambiente em produção!
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [UsersService,PrismaService],
  controllers: [UsersController]
})
export class UsersModule {}
