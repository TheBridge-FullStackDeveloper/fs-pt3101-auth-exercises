const { getCorrectUser } = require("../../queries/auth");
const { hash, serialize } = require("../../utils")
const { generic, login } = require("../../errors/auth");
const errors = require("../../errors/commons");

module.exports = (db) => async (req, res, next) => {
    const { email, username, password } = req.body;

    if (!email && !username || !password) return next(generic["empty"]);

    const queryResult = await getCorrectUser(db)(
        { email, username, compareFn: hash.compare(password) }
    );

    if (!queryResult.ok) return next(login[queryResult.code] || errors[500])

    serialize(res, {email: queryResult.data.email})

    res.status(200).json({
        success: true,
    });
};