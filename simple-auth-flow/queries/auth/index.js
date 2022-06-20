const { selectFullUser, insertUser } = require("./queries");
const { queryCatcher } = require("../utils");


const getFullUser = (db) =>
    async ({ email, username }) => {
        return await queryCatcher(
            db.maybeOne,
            "getFullUser"
        )(selectFullUser({ email, username }));
    };


const createUser = db =>
    async ({ email, username, password }) => {
        const user = await getFullUser(db)({ email, username });

        if (user.data)
            return {
                ok: false,
                code: "duplication",
            };

        return await queryCatcher(
            db.query,
            "createUser"
        )(insertUser({ email, password, username }));
    }

const getCorrectUser = (db) =>
        async ({ email, username, compareFn }) => {
            const user = await getFullUser(db)({ email, username });

            if (!user.data) {
                return {
                    ok: false,
                    code: "unknown",
                };
            }

            const isPasswordCorrect = await compareFn(user.data.password);

            if (!isPasswordCorrect) {
                return {
                    ok: false,
                    code: "unknown",
                };
            }

            return {
                ok: true,
                data: { email: user.data.email },
            };
        };


module.exports = {
    createUser,
    getFullUser,
    getCorrectUser,
}