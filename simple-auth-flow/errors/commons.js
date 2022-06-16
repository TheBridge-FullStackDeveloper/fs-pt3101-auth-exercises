module.exports = {
    400: {
        statusCode: 400,
        error: newError('Something went wrong')
    },
    401: {
        statusCode: 401,
        error: newError('Unauthorized')
    },
    403: {
        statusCode: 403,
        error: newError('Forbidden')
    },
    404: {
        statusCode: 404,
        error: newError('Path not found')
    },
    500: {
        statusCode: 500,
        error: newError('is currently unable to handle this request')
    },

}