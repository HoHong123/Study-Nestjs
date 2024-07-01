/** @format */

import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import errors from 'configs/error.config';
import { v1 as uuid } from 'uuid';
import { Board, BoardStatus } from './boards.model';
import { CreateBoardDto } from './dto/create-board.dto';

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

		const board = this.boards.find(board => board.id === id);
	
		if (!board) {
			throw new NotFoundException(errors.notFoundError);
		}
	  
		return this.boards.find((boards) => boards.id === id);
	}

	createBoard(createBoardDTO: CreateBoardDto) : Board {
		//const title = createBoardDTO.title;
		//const description = createBoardDTO.description;
		const { id, title, description, status } = createBoardDTO;

		const board: Board = {
			id,
			title,
			description,
			status,
		};

		this.boards.push(board);
		console.log(this.boards);

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

	getBoardsByPage(page: number, pageSize: number): Board[] {
		const startIndex = (page - 1) * pageSize;
		const endIndex = startIndex + pageSize;
		return this.boards.slice(startIndex, endIndex);
	}
}
