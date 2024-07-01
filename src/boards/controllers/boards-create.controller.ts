/** @format */

import { Body, Controller, Logger, Post, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { DefaultInterceptor } from 'src/core/interceptor/default.interceptor';
import { Board } from '../board.entity';
import { CreateBoardDto } from '../dto/create-board.dto';
import { BoardsService } from '../boards.dao';
import { BoardStatus } from '../board-status.enum';


@UseInterceptors(DefaultInterceptor)

@Controller('boards/create')
export class BoardsCreateController {
	constructor(private boardService: BoardsService) {}
	// GET, POST, DELETE, PUT
	// Body 값 전송
	@Post()
	@UsePipes(new ValidationPipe({ whitelist: true }))
	async post(@Body() reqData: CreateBoardDto): Promise<Board> {
		const board: Board = new Board();
		board.id = reqData.id;
		board.title = reqData.title;
		board.description = reqData.description;
		board.status = BoardStatus.PUBLIC;

	  	return this.boardService.createBoard(board);
	}
}

// 컨트롤러에서 사용하는 Dto를 서비스 단까지 그대로 내려가는 것은 좋지 않다.
// + 실제 비지니스 로직이 어디서 돌아갈 것인가를 결정해야한다. (컨트롤러? 서비스까지?)
// + 비지니스 로직을 컨트롤러에서 처리하는 것
// + 