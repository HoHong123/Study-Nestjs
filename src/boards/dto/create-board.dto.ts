/** @format */

import { IsEnum, IsNotEmpty, IsOptional } from "class-validator";
import { BoardStatus } from "../boards.model";
import { Transform } from "class-transformer";

export class CreateBoardDto {
	@IsNotEmpty()
	id: string;

	@IsNotEmpty()
	title: string;

	@IsNotEmpty()
	description: string;

	@IsEnum(BoardStatus)
	@IsOptional()
	@Transform(({ value }) => value ?? BoardStatus.PUBLIC) // 디폴트 값 선언
	status: BoardStatus = BoardStatus.PUBLIC;
}