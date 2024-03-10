const fs = require('fs');
const ejs = require('ejs');
const nodemailer = require('nodemailer');
const { dirname } = require('path');
// let enviado=false;

const emailSender = async (user) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bancocomercialujamaa@gmail.com',
      pass: 'rcak pprh sfig udis'
    }
  });
  const templateToRender = fs.readFileSync(__dirname + '/views/email/templateConfirmation.ejs', 'utf8');
  let template = ejs.render(templateToRender, { cliente: { nome: user.nome, code: user.code } });

  let mailOptions = {
    from: 'bancocomercialujamaa@gmail.com',
    to: user.email,
    subject: 'BCU Activação de Conta',
    html: template
  };

  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    // enviado=true;
    console.log('SMS: %s', info.messageId);
  });
  // return enviado;
}

module.exports = { emailSender };