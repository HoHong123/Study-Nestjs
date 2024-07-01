import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from '../board-status.enum';

@Entity()
export class Board {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true})
  id: number;

  @Column({type: 'char', length: 256})
  title: string;

  @Column()
  description: string;

  @Column({ type: 'tinyint', default: BoardStatus.PUBLIC })
  status: BoardStatus; // 특정 데이터를 명확히 나타내는 경우, 해당 타입을 선언하는 것이 맞다.
}

// Bigint의 경우, typescript의 number 값을 초과하기에 장애가 발생할 수 있다.
// Bigint의 경우, string으로 변수를 선언하여 전달한다. (JavaScript이기에 발생하는 문제점)