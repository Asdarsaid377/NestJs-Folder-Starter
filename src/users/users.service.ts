import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private dbService: PrismaService) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.dbService.user.create({
      data: createUserDto,
    });
  }

  async findByEmail(email: string): Promise<User> {
    return this.dbService.user.findUnique({
      where: {
        email: email,
      },
    });
  }
  async findAll(): Promise<any> {
    return this.dbService.user.findMany();
  }

  findOne(id: number) {
    return this.dbService.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    return this.dbService.user.update({
      where: { id: id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.dbService.user.delete({
      where: { id: id },
    });
  }
}
