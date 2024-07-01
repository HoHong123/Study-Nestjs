/** @format */

import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Board } from "src/boards/board.entity";

export const typeORMConfig: TypeOrmModuleOptions = {
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "nestjs_user",
	password: "ghdrl007",
	database: "nestjs_project",
	entities: [Board],
	synchronize: true,
};
