import { Module, CacheModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from '../users/user.controller';
import { UsersService } from '../users/user.service';
import { UsersModule } from '../users/user.module';
import { ConfigModule as CustomConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/src/config/env/.env.development`,
    }),
    MongooseModule.forRootAsync({
      imports: [CustomConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGODB_URI'),
        useCreateIndex: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
