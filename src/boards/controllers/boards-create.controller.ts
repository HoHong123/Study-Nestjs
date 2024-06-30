/** @format */

import { Body, Controller, Post, UseFilters } from "@nestjs/common";
import { BoardsService } from "../boards.service";
import { Board, BoardStatus } from "../boards.model";
import { HttpExceptionFilter } from "src/exception-filter/http-exception.filter";

interface BoardCreateRequest {
	id: string;
}

interface BoardCreateReponse {
	board: Board;
}

// Add Exception filter to whole controller
@UseFilters(HttpExceptionFilter)

@Controller("boards/create")
export class BoardsCreateController {
	constructor(private boardService: BoardsService) {}

	// GET, POST, DELETE, PUT
	// Body 값 전송
	@Post()
	// Add Exception filter to this function
	//@UseFilters(HttpExceptionFilter)
	post(@Body() reqData: BoardCreateRequest): BoardCreateReponse {
		const { id } = reqData;

		// 데이터베이스 연동시 서비스로 board 멤버 변수 초기화
		//throw new MyException(ErrorCode.DEFAULT, "Default Error out");

		return {
			board: {
				id: id,
				title: "testing",
				description: "nest js request testing",
				status: BoardStatus.PUBLIC,
			},
		};
	}
}
