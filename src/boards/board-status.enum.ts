/** @format */

export enum BoardStatus {
	PUBLIC 	= 1,
	PRIVATE = 2,
}

// enum을 string 혹은 int로 선언할 수 있으나, int형이 기술적으로 이점이 많다.
// + 확장성을 고려하여, 쿼리문 요청이나 데이터베이스 보관에도 더욱 용이하다.