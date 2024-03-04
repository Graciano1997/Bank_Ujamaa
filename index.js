const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(express.static('public'));

app.get('/', (pedido, resposta) => {
    resposta.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/dashboard', require('./Router/dashboard'));
app.use('/api/utilizador', require('./Router/utilizador'));

app.get('/login', (pedido, resposta) => {
    resposta.sendFile(path.join(__dirname, '/View/login.html'));
});

app.get('/cadastrar', (pedido, resposta) => {
    resposta.sendFile(path.join(__dirname, '/View/cadastrar.html'));
});

app.get('/dashboard', (pedido, resposta) => {
    resposta.sendFile(path.join(__dirname, '/View/dashboard.html'));
});
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 
  };
 app.use(cors(corsOptions));
app.listen(3000, "localhost", () => {
    console.log(`Servidor do Banco BCU rodando na porta 3000 ...`);
    console.log(`ctrl+c pra Encerrar`);
});
