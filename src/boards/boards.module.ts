/** @format */

import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsCreateController } from './controllers/boards-create.controller';
import { BoardsController } from './controllers/boards.controller';
import { BoardsPageController } from './controllers/boards-show-page.controller';

@Module({
	controllers: [
		BoardsController, 
		BoardsCreateController, 
		BoardsPageController
	],
	providers: [BoardsService],
})
export class BoardsModule {}
