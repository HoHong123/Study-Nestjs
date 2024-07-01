/** @format */

import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { HttpExceptionFilter } from './core/exception-filter/http-exception.filter';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	// Global Exception filter with Logger
	app.useGlobalFilters(new HttpExceptionFilter());

	await app.listen(3000); // Using port 3000
}

bootstrap();

// 모듈화
// + 모듈화의 범주는 정답은 없으나 게임은 단일 모듈의 장점이 조금 더 높은 편이다.