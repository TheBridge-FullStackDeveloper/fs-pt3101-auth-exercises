const { query } = require("express");
const { generic, register } = require("../../errors/auth")
const { createUser } = require("../../queries/auth")

module.exports = (db) => async (req, res, next) => {
    const { email, username, password } = req.body;
 
    if(!email && !username) return next(generic["emptyName"]);
    if(!password) return next(generic["emptyPassword"]);

    const { ok, code } = await createUser(db)({ email, username, password });

    if(!ok) return next(register[code]);

    res.status(200).json({
        success: true,
    });
};