/** @format */

import { Injectable, NotFoundException } from '@nestjs/common';
import errors from 'configs/error.config';
import { v1 as uuid } from 'uuid';
import { Board, BoardStatus } from './boards.model';
import { CreateBoardDTO } from './dto/create-board.dto';

// TODO : DAO = Data Access Object로 명칭 변경 예정
@Injectable()
export class BoardsService {
	private boards: Board[] = [];

	getAllBoards(): Board[] {
		return this.boards;
	}

	getBoardID(id: string): Board {
		if (!id || isNaN(Number(id))) {
			throw new NotFoundException(errors.notFoundError);
		}

		return this.boards.find((boards) => boards.id == id);
	}

	createBoard(createBoardDTO: CreateBoardDTO) {
		//const title = createBoardDTO.title;
		//const description = createBoardDTO.description;
		const { title, description } = createBoardDTO;

		const board: Board = {
			id: uuid(),
			title,
			description,
			status: BoardStatus.PUBLIC,
		};

		this.boards.push(board);
		return board;
	}

	deleteBoard(id: string): void {
		this.boards = this.boards.filter((board) => board.id !== id);
	}

	updateBoard(id: string, status: BoardStatus): Board {
		const board = this.getBoardID(id);

		board.status = status;

		return board;
	}
}
