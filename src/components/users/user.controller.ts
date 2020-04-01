import {
  Controller,
  Body,
  Param,
  CacheInterceptor,
  UseInterceptors,
  Get,
  Post,
  Put,
  Delete
} from '@nestjs/common';
import { User } from './interfaces/Iuser.interface';
import { UsersService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('users')
@UseInterceptors(CacheInterceptor)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body() createUserDto: UserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Put(':id')
  updateById(@Body() updateUserDto: UserDto, @Param('id') id): Promise<User> {
    return this.usersService.updateById(id, updateUserDto);
  }

  @Delete(':id')
  deleteById(@Param('id') id): Promise<User> {
    return this.usersService.deleteById(id);
  }
}
