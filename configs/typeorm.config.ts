/** @format */

import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

export const typeORMConfig: TypeOrmModuleOptions = {
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "postgres",
	password: "ghdrl007",
	database: "nest-app",
	entities: [__dirname + "/../**/*.entity.{js,ts}"],
	synchronize: true,
};
