/** @format */

import { Body, Controller, Logger, Post, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { DefaultInterceptor } from 'src/interceptor/default.interceptor';
import { Board, BoardStatus } from '../boards.model';
import { CreateBoardDto } from '../dto/create-board.dto';
import { BoardsService } from '../boards.service';
import { TimeoutError } from 'rxjs';

interface BoardCreateResponse {
	board: Board;
}

// Add Exception filter to whole controller
//@UseFilters(HttpExceptionFilter)

@UseInterceptors(DefaultInterceptor)

@Controller('boards/create')
export class BoardsCreateController {
	constructor(private boardService: BoardsService) {}
    private readonly logger = new Logger("Intercept");

	// GET, POST, DELETE, PUT
	// Body 값 전송
	@Post()
	@UsePipes(new ValidationPipe({ whitelist: true }))
	// Add Exception filter to this function
	//@UseFilters(HttpExceptionFilter)
	post(@Body() reqData: CreateBoardDto): BoardCreateResponse {
		return { board: this.boardService.createBoard(reqData) };
	}
}
