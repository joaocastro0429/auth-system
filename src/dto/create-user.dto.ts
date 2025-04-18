import { Role } from "@prisma/client";
import { IsEmail, IsEnum, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string;
    @IsString()
    password: string;
    @IsOptional()
    @IsEnum(Role)
    role?: Role;
  }
  