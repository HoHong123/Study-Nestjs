import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './boards.model';
import { CreateBoardDTO } from './dto/create-board.dto';
import { stat } from 'fs';
import { pipe } from 'rxjs';

@Controller('boards')
export class BoardsController {
    constructor(private boardService: BoardsService) {}

    // GET, POST, DELETE, PUT
    @Get() // 도메인/boards
    getAllBoard() : Board[] {
        return this.boardService.getAllBoards();
    }

    // Body : Post의 Body에 있는 값을 추출하기 위한 파라미터
    // @Post()
    // createBoard(
    //     @Body('title') title:string,
    //     @Body('description') description: string) : Board { 
    //         return this.boardService.createBoard(title, description);
    // }
    @Post()
    createBoard(
        @Body() createBoardDTO: CreateBoardDTO
    ) : Board { 
            return this.boardService.createBoard(createBoardDTO);
    }

    // Body 값 전송
    @Get('/:id')
    getBoardByID(@Param('id') id: string) {
        return this.boardService.getBoardID(id);
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id: string): void {
        this.boardService.deleteBoard(id);
    }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id') id: string,
        @Body('status') status: BoardStatus
    ) {
        return this.boardService.updateBoard(id, status);
    }
}
