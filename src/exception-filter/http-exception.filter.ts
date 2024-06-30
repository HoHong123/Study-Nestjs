/** @format */

import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from '@nestjs/common';
import errors from 'configs/error.config';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
	// Add Logger later
	constructor(private logger: Logger) {}

	catch(exception: HttpException, host: ArgumentsHost) {
		const context 	= host.switchToHttp();
		const response 	= context.getResponse<Response>();
		const request 	= context.getRequest<Request>();
		const ctxStatus = exception.getStatus();

		// Log the exception before response
		this.logger.error(
			`${request.method} ${request.originalUrl} ${ctxStatus} error: ${exception.message}`,
		);

		const errorDetail = exception.getResponse();
		response.status(ctxStatus).json({
			code: response.statusCode, 
			error: true, 
			errorDetail 
		});
	}
}
