const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const { Utilizador } = require('./models/utilizador');

app.set('view engine', 'ejs');
app.use(express.static('public'));
// const corsOptions = {
//     origin: '*',
//     optionsSuccessStatus: 200 
//   };
app.use(cors());

app.use('/api/utilizador', require('./Router/utilizador'));

app.get('/', (pedido, resposta) => {
    resposta.render('index',{title:'BCU Página Inicial'});
});

app.get('/dashboard', (pedido, resposta) => {
    // if (Utilizador.usuarioCorrente != null) {
        resposta.render('dashboard');
    //   }else{
        // resposta.render('warm');
    //   }
});

app.use('/dashboard', require('./Router/dashboard'));

app.get('/login', (pedido, resposta) => {
    resposta.render('login');
});

app.get('/cadastrar', (pedido, resposta) => {
    resposta.render('cadastrar');
});

app.get('/validacao', (pedido, resposta) => {
    resposta.render('validarConta');
});

app.use(function(req, res, next) {
    res.status(404).send('<h1>error/404.html</h1>');
});

app.listen(3000, "0.0.0.0", () => {
    console.log(`Servidor do Banco BCU rodando na porta 3000 ...`);
    console.log(`ctrl+c pra Encerrar`);
});
