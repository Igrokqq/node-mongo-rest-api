import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/Iuser.interface';
import { UserDto } from './dto/user.dto';
import { Model, Types } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find();
  }

  async create(user: UserDto): Promise<User> {
    return await this.userModel.create(user);
  }

  async updateById(id: Types.ObjectId, newProfile: User): Promise<User> {
    return await this.userModel.updateOne({ _id: id }, { $set: newProfile });
  }

  async deleteById(id: Types.ObjectId): Promise<User> {
    return await this.userModel.deleteOne({ _id: id });
  }
}
