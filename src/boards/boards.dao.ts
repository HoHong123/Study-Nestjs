/** @format */

import { Injectable, NotFoundException } from '@nestjs/common';
import errors from 'configs/error.config';
//import { Board, BoardStatus } from './boards.model';
import { Board } from './board.entity';
import { BoardStatus } from './boards.model';
import { CreateBoardDto } from './dto/create-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';

// TODO : DAO = Data Access Object로 명칭 변경 예정
@Injectable()
export class BoardsService {
	private boards: Board[] = [];
	constructor(
		@InjectRepository(Board)
		private boardsRepository: Repository<Board>,
	){}

	getAllBoards(): Promise<Board[]> {
		return this.boardsRepository.find();
	}

	async getBoardByID(id: number): Promise<Board> {	
		const found = await this.boardsRepository.findOne({ where: { id } });

		if (!found) {
		  throw new NotFoundException(errors.notFoundError);
		}
	
		return found;
	}

	async createBoard(entity: Board): Promise<Board> {
		const board = this.boardsRepository.create(entity);
		await this.boardsRepository.save(board);
		return board;
	}

	async deleteBoard(entity: Board): Promise<void> {
		const result = await this.boardsRepository.delete(entity.id);
		if (result.affected === 0) {
		  throw new NotFoundException(`Board with ID "${entity.id}" not found`);
		}
	}
	
	async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
		const board = await this.getBoardByID(id);
		//board.status = status;
		await this.boardsRepository.save(board);
		return board;
	}


	// ============== Extra features ==============
	async getBoardsByPage(page: number, pageSize: number): Promise<Board[]> {
		const [boards, total] = await this.boardsRepository.findAndCount({
		  skip: (page - 1) * pageSize,
		  take: pageSize,
		});
	
		if (boards.length === 0) {
		  throw new NotFoundException('No boards found for the given page');
		}
	
		return boards;
	}
}

// 서비스 or DAO
// 기본 CRUD는 구성하라. (Get, GetList, Create, Update, Delete)
// + CRUD는 구조의 규격을 확실히 맞춘다.
// 그 외 필요 함수들은 따로 구분하라.
// + 캐싱에 굉장히 중요한 로직
// ++ 게임 아이템과 같이 1대 다의 관계에서, 다를 리스트화하여 리스트 전체를 캐싱한다.

// Redis
// + 세션용, 일반 레디스는 차이가 있음. (IORedis 참조)