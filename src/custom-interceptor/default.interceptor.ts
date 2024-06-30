import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { Request, Response } from 'express';

@Injectable()
export class DefaultInterceptor implements NestInterceptor {
    private readonly logger = new Logger("Intercept");

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request   = context.switchToHttp().getRequest<Request>();
    const response  = context.switchToHttp().getResponse<Response>();
    this.logger.log(`Intercepted: ${request.method} ${request.url}`);

    return next.handle().pipe(
      map((data) => ({
          code: response.statusCode, 
          timestamp: new Date(), 
          data: data === null ? null : data }
        )
      )
    );
  }
}
