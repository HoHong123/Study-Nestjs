/** @format */

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { HttpExceptionFilter } from "./exception-filter/http-exception.filter";
import { Logger } from "@nestjs/common";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	// Global Exception filter with Logger
	const logger = app.get(Logger);
	app.useGlobalFilters(new HttpExceptionFilter(logger));

	await app.listen(3000); // Using port 3000
}

bootstrap();
