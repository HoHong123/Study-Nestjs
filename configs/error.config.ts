const errors = {
	400: {
		code: 400,
		error: 'Bad Request',
		message: 'Validation failed.',
	},
	401: {
		code: 401,
		error: 'Type Mismatch',
		message: 'Require correct input type.',
	},
	404: {
		code: 404,
		error: 'Not Found',
		message: 'Cannot find data.',
	},
	408: {
		code: 408,
		error: 'Request Timeout',
		message: 'Fail to respond.',
	},
	validationFailed: {
		code: 400,
		error: 'Bad Request',
		message: 'Validation failed.',
	},
	typeError: {
		code: 401,
		error: 'Type Mismatch',
		message: 'Require correct input type.',
	},
	notFoundError: {
		code: 404,
		error: 'Not Found',
		message: 'Cannot find data.',
	},
	timeOutError: {
		code: 408,
		error: 'Request Timeout',
		message: 'Fail to respond.',
	},
};

export default errors;