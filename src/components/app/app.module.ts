import * as path from 'path';
import mongodbConfig from '../../config/mongodbConfig';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '../users/user.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: path.join(`${__dirname}/../../src/config/env/.env.development`),
    }),
    MongooseModule.forRootAsync(mongodbConfig),
  ],
})
export class AppModule {}
