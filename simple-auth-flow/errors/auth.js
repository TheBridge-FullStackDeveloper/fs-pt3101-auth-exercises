module.exports = {
    commons: {
        empty:{
            statusCode: 400,
            error: new Error('all fields are required')
        }
    },
    register: {
        duplication: {
            statusCode: 400,
            error: new Error('user already exists')
        },
    },
    login: {

    },
}