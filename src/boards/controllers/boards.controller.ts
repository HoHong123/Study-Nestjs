import { Controller, Get, Param } from '@nestjs/common';
import { BoardsService } from '../boards.service';

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
