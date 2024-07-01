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
		return next.handle();
    }
}

// 타임아웃
// + 모든 요청에 대하여 타임 아웃 체크가 필요하다.
// 서버 타임
// + API 요청은 200ms 안에 처리한다는 전제로 작성된다.

// Response 인터셉터
// + 반환 값에 마지막 검증을 하는 단계
// ++ 불필요한 정보 유출을 막고 데이터 결함을 제거하는 과정
