import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor, RequestTimeoutException } from '@nestjs/common';
import { Observable, TimeoutError, catchError, throwError, timeout } from 'rxjs';

@Injectable()
export class LoginInterceptor implements NestInterceptor {
    private readonly logger = new Logger(LoginInterceptor.name);

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        // Request를 추출
        const request = context.switchToHttp().getRequest<Request>();
        
        // Redis에서 액세스 토큰을 확인하고 해당 유저가 로그인 상황이 아니라면 예외처리
		return next.handle().pipe(
			timeout(5000),
			catchError(err => {
				if (err instanceof TimeoutError) {
					// 타임아웃 예외 발생 시
					this.logger.error(`Timeout error: ${request.method} ${request.url}`);
					return throwError(() => new RequestTimeoutException('Request Timeout'));
				}
				return throwError(() => err);
			}),
		);
    }
}
