module.exports = {
    400: {
        statusCode: 400,
        error: new Error('Something went wrong')
    },
    401: {
        statusCode: 401,
        error: new Error('Unauthorized')
    },
    403: {
        statusCode: 403,
        error: new Error('Forbidden')
    },
    404: {
        statusCode: 404,
        error: new Error('Path not found')
    },
    500: {
        statusCode: 500,
        error: new Error('We are currently unable to handle this request')
    },

}