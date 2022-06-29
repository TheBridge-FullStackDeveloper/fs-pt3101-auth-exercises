const router = require("express").Router();
const { authorizer, checker } = require("../../middlewares")
//aqui cargamos los middlewares para controlar los datos ingresados por el cliente.

const forms = {
    register: ['username', 'email', 'password'],
    login: ['email', 'password']
}

module.exports = (db) => {
    router.post("/register", checker(...forms.register), require("./register")(db));
    router.post("/login", checker(...forms.login), require("./login")(db));
    router.post("/logout", require("./logout")())
    return router;
}

//////////////////Pendiente logout