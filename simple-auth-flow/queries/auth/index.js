const { sql } = require("slonik");

const getFullUser = db => async ({ email = 'false', username = 'false' }) => {
    try {
        const result = await db.maybeOne(sql`
        SELECT * FROM users
        WHERE email = ${email}
        OR username = ${username};
        `);

        return {
            ok: true,
            searchMethod: email === result.email? "email" : "username",
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
                code: `${user.searchMethod}Duplication`,
            };
        };

        await db.query(sql`
        INSERT INTO users (
            email, username, password
        ) VALUES (
            ${email}, ${username}, ${password}
        )
        `);

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

module.exports = {
    createUser,
    getFullUser
}