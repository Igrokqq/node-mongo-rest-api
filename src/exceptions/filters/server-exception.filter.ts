import { ArgumentsHost, ExceptionFilter, InternalServerErrorException } from '@nestjs/common';
import { Response } from 'express';

export class ServerExceptionFilter implements ExceptionFilter {
  catch(exception: InternalServerErrorException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const status = 500;

    res
      .status(status)
      .json({
        statusCode: status,
        error: exception.message,
      });
  }
}
