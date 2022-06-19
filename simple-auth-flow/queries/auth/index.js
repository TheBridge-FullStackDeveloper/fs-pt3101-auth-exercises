const { sql } = require("slonik");
const { selectFullUser, insertUser } = require("./queries")

const getFullUser = db => async ({ email = 'false', username = 'false' }) => {
    try {
        const result = await db.maybeOne(selectFullUser({ email, username }));

        return {
            ok: true,
            duplicatedData: result && (email === result.email)? "email" : "username",
            data: result,
        };

    } catch (error) {
        console.error(`> [getFullUser]: `, error)

        return {
            ok: false,
        };
    };
}

const createUser = db => async ({ email = null, username = null, password }) => {
    try {
        const user = await getFullUser(db)({ email, username });

        if (user.data) {
            return {
                ok: false,
                code: `${user.duplicatedData}Duplication`,
            };
        };

        await db.query(insertUser({ email, username, password }));

        return {
            ok: true,
        };

    } catch (error) {
        console.error(`> [createUser]: `, error.message)

        return {
            ok: false,
        };
    };
};

const getCorrectUser = db => async ({ email, username, compareFn }) => {

    try {
        const user = await getFullUser(db)({ email, username })
        console.log('user: ', user)

        if(!user.data) {
            return {
                ok: false,
                code: "unknown",
            }
        }

        const isPasswordCorrect = await compareFn(user.data.password);
        console.log(isPasswordCorrect)

        if(!isPasswordCorrect) {
            return {
                ok: false,
                code: "unknown",
            }
        }

        return {
            ok: true,
            data: {
                [user.data.email? "email" : "username"]: user.data.email || user.data.username,
            }
        };
    } catch (error) {
        console.error(`> [getCorrectUser]: `, error.message)

        return {
            ok: false,
        };
    };
};

module.exports = {
    createUser,
    getFullUser,
    getCorrectUser,
}