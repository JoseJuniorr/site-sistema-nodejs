module.exports = function (to, subject, text) {
  const nodemailer = require("nodemailer");

  const smtpTransport = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: parseInt(process.env.SMTP_PORT),
    secure: false,
    auth: { user: process.env.SMTP_USERNAME, pass: process.env.SMTP_PASSWORD },
  });

  const message = {
    from: process.env.SMTP_USERNAME,
    to,
    subject,
    text,
  };

  smtpTransport.sendMail(message, (err, res) => {
    if (err) return console.log("erro ao enviar o email:" + err);
    else console.log("email enviado com sucesso!");

    smtpTransport.close();
  });
};
