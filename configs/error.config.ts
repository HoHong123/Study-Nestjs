const errors = {
    validationFailed: {
        code: 400,
        message: 'Validation failed.',
        error: 'Bad Request'
    },
    typeError: {
        code: 401,
        message: 'Require correct input type.',
        error: 'Type Missmatch'
    },
    notFoundError: {
        code: 404,
        message: 'Cannot find data.',
        error: 'Not Found'
    }
};

export default errors;