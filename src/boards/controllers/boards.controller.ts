/** @format */

import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { BoardsService } from '../boards.service';
import { DefaultInterceptor } from 'src/custom-interceptor/default.interceptor';

@UseInterceptors(DefaultInterceptor)

@Controller('boards/:id')
export class BoardsController {
	constructor(private boardService: BoardsService) {}

	// GET, POST, DELETE, PUT
	// Body 값 전송
	@Get()
	getBoardByID(@Param('id') id: string) {
		return this.boardService.getBoardID(id);
	}
}
