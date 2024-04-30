import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.model';
import { CreateBoardDTO } from './dto/create-board.dto';

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
}
