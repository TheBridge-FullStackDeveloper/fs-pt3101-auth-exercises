module.exports = {
    generic: {
        empty: {
            statusCode: 400,
            error: new Error("All Fields Are Mandatory!!"),
        },
    },
    login: {
        unknown: {
            statusCode: 400,
            error: new Error("User or Password Incorrect"),
        },
    },
    register: {
        duplication: {
            statusCode: 400,
            error: new Error("User Already Exists"),
        },
    },
};