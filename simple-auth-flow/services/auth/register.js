const { createUser } = require("../../queries/auth");
const { hash, sendEmail } = require("../../utils");
const { register } = require("../../errors/auth");
const errors = require("../../errors/commons");


module.exports = (db) => async (req, res, next) => {

    const { username, email, password } = req.body;

    const queryResult = await createUser(db)({
        username,
        email,
        password: await hash.encrypt(password),
    })

    if (!queryResult.ok) return next(register[queryResult.code] || errors[500]);

    const message = 'Gracias por registrarse en mi aplicacion!!'

    try {
        await sendEmail({
            email,
            subject: 'Gracias por registrarse',
            message,
    
        })
    } catch (error) {
        console.log('Error envio email: ', error.message)
    }


    res.status(200).json({
        success: true,
        message: 'Test Register',
      });
}