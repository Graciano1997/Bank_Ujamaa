const fs = require('fs');
const ejs = require('ejs');
const nodemailer = require('nodemailer');

const emailSender = async (user,templateToSend) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bancocomercialujamaa@gmail.com',
      pass: 'rcak pprh sfig udis'
    }
  });

  const templateToRender = fs.readFileSync(__dirname + templateToSend , 'utf8');
  let template = ejs.render(templateToRender, { cliente:{nome: user.nome, code: user.code}});
  let mailOptions = {
    from: 'bancocomercialujamaa@gmail.com',
    to: user.email,
    subject: user.assunto,
    html: template
  };

  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('SMS: %s', info.messageId);
  });
}

module.exports = { emailSender };