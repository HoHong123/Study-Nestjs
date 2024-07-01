import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { Request, Response } from 'express';

@Injectable()
export class DefaultInterceptor implements NestInterceptor {
    private readonly logger = new Logger("Intercept");

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request   = context.switchToHttp().getRequest<Request>();
    const response  = context.switchToHttp().getResponse<Response>();
    this.logger.log(`${request.method} ${response.statusCode} : ${request.url}`);

    return next.handle().pipe(
      map((data) => {
        const result = {
          code: response.statusCode,
          timestamp: new Date().toISOString(),
          data: data !== undefined && data !== null ? data : null,  // 데이터가 null인 경우 null을 출력
        };
        this.logger.log(`${request.method} RETURN : ${JSON.stringify(result)}`);
        return result;
      }),
    );
  }
}
