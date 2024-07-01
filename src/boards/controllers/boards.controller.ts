/** @format */

import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { BoardsService } from '../boards.dao';
import { DefaultInterceptor } from 'src/core/interceptor/default.interceptor';

@UseInterceptors(DefaultInterceptor)

@Controller('boards/:id')
export class BoardsController {
	constructor(private boardService: BoardsService) {}

	// GET, POST, DELETE, PUT
	// Body 값 전송
	@Get()
	getBoardByID(@Param('id') id: number) {
		return this.boardService.getBoardByID(id);
	}
}
