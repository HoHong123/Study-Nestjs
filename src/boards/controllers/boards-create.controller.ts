import { Body, Controller, Post } from '@nestjs/common';
import { BoardsService } from '../boards.service';
import { Board, BoardStatus } from '../boards.model';

interface BoardCreateRequest {
    id : string;
}

interface BoardCreateReponse {
    board : Board;
}

@Controller('boards/create')
export class BoardsCreateController {
    constructor(private boardService: BoardsService) {}

    // GET, POST, DELETE, PUT
    // Body 값 전송
    @Post()
    post(@Body() reqData : BoardCreateRequest) : BoardCreateReponse {
        const { id } = reqData;
        
        // 데이터베이스 연동시 서비스로 board 멤버 변수 초기화
        //throw new MyException(ErrorCode.DEFAULT, "Default Error out");

        return {
            board: {
                id: id,
                title: "testing",
                description: "nest js request testing",
                status : BoardStatus.PUBLIC,
            }
        }
    }
}
