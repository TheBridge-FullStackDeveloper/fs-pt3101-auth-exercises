module.exports = {
    generic: {
        emptyName:{
            statusCode: 400,
            error: new Error('Username or email required')
        },
        emptyPassword: {
            statusCode: 400,
            error: new Error('Password required')
        }
    },
    register: {
        usernameDuplication: {
            statusCode: 400,
            error: new Error('username already exists')
        },
        emailDuplication: {
            statusCode: 400,
            error: new Error('email already exists')
        },
    },
    login: {
        unknown: {
            statusCode: 400,
            error: new Error('user or password incorrect')
        }
    },
}