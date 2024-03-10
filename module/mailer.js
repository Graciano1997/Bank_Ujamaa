const fs=require('fs');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bancocomercialujamaa@gmail.com',
        pass: 'rcak pprh sfig udis'
    }
});

let htmlTemplate = fs.readFileSync('../public/assets/email/welcome.html', 'utf8'); // For HTML file

// Setup email data
let mailOptions = {
    from: 'bancocomercialujamaa@gmail.com', // sender address
    to: 'gracianomanuelhenrique@gmail.com', // list of receivers
    subject: 'Hello  ✔', // Subject line
    text: 'Hello world? UJAMAA', // plain text body
    html: htmlTemplate // html body
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s',info.messageId);
});
