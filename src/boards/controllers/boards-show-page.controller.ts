/** @format */

import { Controller, Get, Param, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { BoardsService } from '../boards.service';
import { DefaultInterceptor } from 'src/interceptor/default.interceptor';

@UseInterceptors(DefaultInterceptor)
// 쿼리문과 매개변수를 통한 호출 차이점은 클까?
@Controller('boards/:page/:pageSize')
//@Controller('boards/page')
export class BoardsPageController {
    constructor(private boardService: BoardsService) {}

    @Get()
    getBoardsByPage(
        @Param('page', ParseIntPipe) page: number,
        @Param('pageSize', ParseIntPipe) pageSize: number,
    ) {
        return this.boardService.getBoardsByPage(page, pageSize);
    }
}
