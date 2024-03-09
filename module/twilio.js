const accountSid = 'AC9aad67eb473dc539153cd07aeaff73ee';
const authToken = 'edd4b587c778f3f0023de68aa60c9dbb';
const client = require('twilio')(accountSid, authToken);

const sendMessage = () => {
    client.messages
        .create({
            body: `Banco BCU
            Seu codigo secreto: Miguel2024A12!
            `,
            from: '+12138085550',
            to: '+244935636086'
        })
        .then(message => console.log('Message sent:', message.sid))
        .catch(error => console.error('Error sending message:', error));
};


sendMessage();
