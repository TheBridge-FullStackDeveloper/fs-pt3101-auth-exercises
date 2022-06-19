const { sql } = require("slonik")

const selectFullUser = ({ email, username }) => {
    return sql`
        SELECT * FROM users
        WHERE email = ${email}
        OR username = ${username};
    `;
};

const insertUser = ({ email, username, password }) => {
    return sql`
        INSERT INTO users (
            email, username, password
        ) VALUES (
            ${email}, ${username}, ${password}
        )
    `
};

module.exports = {
    selectFullUser,
    insertUser,
}