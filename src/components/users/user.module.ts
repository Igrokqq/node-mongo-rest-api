import { CacheModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';
import { UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    CacheModule.register(),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    CacheModule.register(),
  ],
})
export class UsersModule {}
