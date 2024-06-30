/** @format */

import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from 'configs/typeorm.config';
import { BoardsModule } from './boards/boards.module';

@Module({
	imports: [BoardsModule, TypeOrmModule.forRoot(typeORMConfig)],
	providers: [Logger],
})
export class AppModule {}
