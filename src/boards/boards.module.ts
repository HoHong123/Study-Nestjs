/** @format */

import { Module } from '@nestjs/common';
import { BoardsService } from './boards.dao';
import { BoardsCreateController } from './controllers/boards-create.controller';
import { BoardsController } from './controllers/boards.controller';
import { BoardsPageController } from './controllers/boards-show-page.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './board.entity';

@Module({
	imports: [
		TypeOrmModule.forFeature([Board])
	],
	controllers: [
		BoardsController, 
		BoardsCreateController, 
		BoardsPageController
	],
	providers: [
		BoardsService
	],
})
export class BoardsModule {}
