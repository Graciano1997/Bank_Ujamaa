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

//Serviços
app.get('/seguros', (pedido, resposta) => {
    resposta.render('servicos/seguros');
});
app.get('/abertura_conta', (pedido, resposta) => {
    resposta.render('servicos/aberturaConta');
});
app.get('/faturas_genericas', (pedido, resposta) => {
    resposta.render('servicos/faturaGenerica');
});
app.get('/internet_banking', (pedido, resposta) => {
    resposta.render('servicos/internetBanking');
});
//Fim serviços

//Apoio ao Cliente
app.get('/perguntas_frequentes', (pedido, resposta) => {
    resposta.render('apoioCliente/perguntasFrequentes');
});
app.get('/apoio_ao_cliente', (pedido, resposta) => {
    resposta.render('apoioCliente/contatos');
});
//Fim Apoio

//Produtos
app.get('/cartoes', (pedido, resposta) => {
    resposta.render('produtos/cartoes');
});
app.get('/creditos', (pedido, resposta) => {
    resposta.render('produtos/creditos');
});
app.get('/contas', (pedido, resposta) => {
    resposta.render('produtos/contas');
});
app.get('/levantamentos', (pedido, resposta) => {
    resposta.render('produtos/levantamento');
});
//Fim Produtos
app.get('/instituicional', (pedido, resposta) => {
    resposta.render('instituicao');
});
app.get('/empresas', (pedido, resposta) => {
    resposta.render('empresas');
});

app.get('/recuperacao', (pedido, resposta) => {
    resposta.render('recuperacao');
});
app.get('/validarrecuperacao', (pedido, resposta) => {
    resposta.render('validarRecuperacao');
});

app.get('/novascredenciais', (pedido, resposta) => {
    resposta.render('novascredenciais');
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
