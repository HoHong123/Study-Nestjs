/** @format */

import { Controller, Get, Param, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { BoardsService } from '../boards.dao';
import { DefaultInterceptor } from 'src/core/interceptor/default.interceptor';
import { Board } from '../board.entity';

@UseInterceptors(DefaultInterceptor)
// 쿼리문과 매개변수를 통한 호출 차이점은 클까?
@Controller('boards/:page/:pageSize')
//@Controller('boards/page')
export class BoardsPageController {
    constructor(private boardService: BoardsService) {}

    @Get()
    async getBoardsByPage(
      @Param('page', ParseIntPipe) page: number,
      @Param('pageSize', ParseIntPipe) pageSize: number,
    ): Promise<Board[]> {
      return this.boardService.getBoardsByPage(page, pageSize);
    }
}
