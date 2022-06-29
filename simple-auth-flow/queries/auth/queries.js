const { sql } = require("slonik");

const selectFullUser = ({email}) => {
    return sql `
        SELECT * FROM users
        WHERE email = ${email} OR username = ${email};
    `;
};

const insertUser = ({ username, email, password}) =>{
    return sql `
        INSERT INTO users ( username, email, password)
        VALUES (${username}, ${email}, ${password});
    `;
};

module.exports = {
    selectFullUser,
    insertUser,
};