const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gracianomanuelhenrique@gmail.com', // your email
        pass: 'yaraprata2000AMOR' // your password
    }
});

// Setup email data
let mailOptions = {
    from: 'gracianomanuelhenrique@gmail.com', // sender address
    to: 'gracianomanuelhenrique@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s',info.messageId);
});
