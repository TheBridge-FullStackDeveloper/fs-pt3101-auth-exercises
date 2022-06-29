const nodemailer = require("nodemailer");

const sendEmail = async options => { //options es el que reciba la informacion que se completa en el paso 2
    //1 Crear un transportador - proceso de nodemailer
    const transporter =  nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user:process.env.EMAIL_USERNAME,
            pass:process.env.EMAIL_PASSWORD,
        }
    });

    //2 Definir opciones de mensaje
    const message = {
        from:'Gustavo Jaen <gustavo.jaen@gmail.com>',
        to: options.email,
        subject: options.subject,
        text: options.message,
    };

    //3 Enviar email utilizando el transportador y las opciones
    await transporter.sendMail(message);// message se define en el paso 2. Es el objeto completo

}

module.exports = sendEmail;

