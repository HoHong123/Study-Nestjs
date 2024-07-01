/** @format */

export enum ErrorCode {
	SUCCESS = 100,
	DEFAULT = 1000,
}

export enum TestCode {
	SUCCESS = 100,
}

export default interface Testing {
	help: Response;
}

// 다국어 처리
// + 클라이언트가 따로 있는 구조에서는 클라이언트가 다국어를 지원해 줄 수 있다.