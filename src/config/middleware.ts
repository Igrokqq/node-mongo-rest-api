import * as compression from 'compression';
import * as helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from '../exceptions/filters/all-exceptions.filter';

export function init(app) {
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionsFilter());

  app.use(compression());
  // sets secure headers globally
  app.use(helmet());
  // enables cors requests to our api
  app.enableCors();
}
