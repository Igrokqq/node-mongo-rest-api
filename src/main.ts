import * as middleware from './config/middleware';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './components/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  middleware.init(app);

  await app.listen(process.env.SERVER_PORT || 3000);
}

bootstrap();
