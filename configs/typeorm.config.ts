/** @format */

import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Board } from "src/boards/board.entity";

export const typeORMConfig: TypeOrmModuleOptions = {
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "postgres",
	password: "ghdrl007",
	database: "nest-app",
	entities: [Board],
	synchronize: true,
};
