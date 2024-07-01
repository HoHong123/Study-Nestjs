/** @format */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './exception-filter/http-exception.filter';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	// Global Exception filter with Logger
	app.useGlobalFilters(new HttpExceptionFilter());

	await app.listen(3000); // Using port 3000
}

bootstrap();
