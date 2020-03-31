import * as compression from 'compression';
import * as helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';
import { ServerExceptionFilter } from '../exceptions/filters/server-exception.filter';

export function init(app) {

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new ServerExceptionFilter());

  app.use(compression());
  // sets secure headers globally
  app.use(helmet());
  // enables cors requests to our api
  app.enableCors();
}
