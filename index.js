const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/api/utilizador', require('./Router/utilizador'));

app.get('/', (pedido, resposta) => {
    resposta.render('index',{title:'Home Page'});
});

app.get('/dashboard', (pedido, resposta) => {
    resposta.render('dashboard');
});

app.use('/dashboard', require('./Router/dashboard'));

app.get('/login', (pedido, resposta) => {
    resposta.render('login');
});

app.get('/cadastrar', (pedido, resposta) => {
    resposta.render('cadastrar');
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
