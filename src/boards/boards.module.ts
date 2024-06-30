/** @format */

import { Module } from "@nestjs/common";
import { BoardsController } from "./controllers/boards.controller";
import { BoardsService } from "./boards.service";
import { BoardsCreateController } from "./controllers/boards-create.controller";

@Module({
	controllers: [BoardsController, BoardsCreateController],
	providers: [BoardsService],
})
export class BoardsModule {}
