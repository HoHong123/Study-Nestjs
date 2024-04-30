import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDTO } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];

    getAllBoards(): Board[] {
        return this.boards;
    }

    createBoard(createBoardDTO: CreateBoardDTO) {
        //const title = createBoardDTO.title;
        //const description = createBoardDTO.description;
        const { title, description } = createBoardDTO;

        const board: Board = {
            id : uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC
        }

        this.boards.push(board);
        return board;
    }

    getBoardID(id: string) : Board {
        return this.boards.find((boards)=> boards.id == id);
    }

    deleteBoard(id: string): void {
        this.boards = this.boards.filter((board)=> board.id !== id);
    }

    updateBoard(id: string, status: BoardStatus): Board {
        const board = this.getBoardID(id);
        
        board.status = status;

        return board;
    }
}
