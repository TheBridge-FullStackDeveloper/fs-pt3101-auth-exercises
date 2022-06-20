const { createUser } = require("../../queries/auth")
const { register } = require("../../errors/auth")
const { hash } = require("../../utils")
const errors = require ("../../errors/commons")

module.exports = (db) => async (req, res, next) => {
    const { email, username, password } = req.body;

    const queryResult = await createUser(db)({ email, username, password: await hash.encrypt(password) });
    
    if(!queryResult.ok) return next(register[queryResult.code] || errors[500]);

    res.status(200).json({
        success: true,
    });
};