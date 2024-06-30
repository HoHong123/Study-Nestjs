import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const context   = host.switchToHttp();
    const response  = context.getResponse<Response>();
    const request   = context.getRequest<Request>();
    const ctxStatus = exception.getStatus();

    response.status(ctxStatus).json({
        code: ctxStatus,
        timestamp: new Date().toString(),
        path : request.url,
        message: exception.message || 'Internal server error',
    });
  }
}
