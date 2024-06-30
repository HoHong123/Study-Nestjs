/** @format */

import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsCreateController } from './controllers/boards-create.controller';
import { BoardsController } from './controllers/boards.controller';

@Module({
	controllers: [BoardsController, BoardsCreateController],
	providers: [BoardsService],
})
export class BoardsModule {}
