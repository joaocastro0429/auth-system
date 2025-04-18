import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersService } from 'src/users/users.service';

@Module({
  providers: [PrismaService]
})
export class PrismaModule {}
