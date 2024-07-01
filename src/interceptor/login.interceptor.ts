import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor, RequestTimeoutException } from '@nestjs/common';
import { Observable, TimeoutError, catchError, throwError, timeout } from 'rxjs';
import { Request, Response } from 'express';

@Injectable()
export class LoginInterceptor implements NestInterceptor {
    private readonly logger = new Logger(LoginInterceptor.name);

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        // Request를 추출
        const request   = context.switchToHttp().getRequest<Request>();
        const response  = context.switchToHttp().getResponse<Response>();
        
        // 1. Redis에서 액세스 토큰이 있는지 확인하고 토큰이 있다면 반환
        // return cacheToken;

        // 2. Redis에서 데이터를 확인하지 못하였다면 신규 토큰 발급
        // + 5초 안에 토큰 발급이 되지 않는다면 예외처리
		return next.handle().pipe(
			timeout(5000),
			catchError(err => {
				if (err instanceof TimeoutError) {
					// 타임아웃 예외 발생 시
					this.logger.error(`${response.statusCode} Timeout error: ${request.method} ${request.url}`);
					return throwError(() => new RequestTimeoutException('Request Timeout'));
				}
				return throwError(() => err);
			}),
		);
    }
}
