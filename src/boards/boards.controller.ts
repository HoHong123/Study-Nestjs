import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
    constructor(private boardService: BoardsService) {}

    // GET, POST, DELETE, PUT
    @Get() // 도메인/boards
    getAllBoard() {
        return this.boardService.getAllBoards();
    }
}
