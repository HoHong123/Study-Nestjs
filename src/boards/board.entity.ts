/** @format */

import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from './board-status.enum';

@Entity()
export class Board extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@Column({type: 'tinyint'})
	status: number;
}
