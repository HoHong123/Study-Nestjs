/** @format */

import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from 'configs/typeorm.config';
import { BoardsModule } from './boards/boards.module';
import { DefaultInterceptor } from './core/interceptor/default.interceptor';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [
		BoardsModule, 
		TypeOrmModule.forRoot(typeORMConfig)
	],
	providers: [
		Logger,
		AppService,
		DefaultInterceptor
	],
	controllers: [
		AppController
	]
})
export class AppModule {}
