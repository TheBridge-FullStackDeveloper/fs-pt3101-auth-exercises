const router = require("express").Router();

module.exports = () => {
    router.post("/register", require("./register")());

    return router;
};