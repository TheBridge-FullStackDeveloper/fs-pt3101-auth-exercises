const { selectFullUser, insertUser } = require("./queries");
const { queryCatcher } = require("../utills");

const getFullUser = (db) => async({email}) => {
    return await queryCatcher(db.maybeOne,"getFullUser")(selectFullUser({ email }));
}

const createUser = (db) => async ({ username, email, password}) =>{
    const user = await getFullUser(db)({email});

    if(user.data){
        return {
            ok: false, 
            code: "duplication"
        }
    };

    return await queryCatcher(db.query,"createUser")(insertUser({ username, email, password }))
}

const getCorrectUser = (db) => async ({ email, compareFn }) => {
    const user = await getFullUser (db)({ email });

    if(!user.data){
        return {
            ok: false,
            code: "unknown",
        }
    }

    const isPassowrdCorrect = await compareFn(user.data.password);

    if(!isPassowrdCorrect){
        return {
            ok: false,
            code: "unknown",
        }
    }

    return {
        ok: true,
        data: { 
            user: user.data.username,
            email: user.data.email,
        
        }
    }
}

module.exports = {
    getFullUser,
    createUser,
    getCorrectUser,
}