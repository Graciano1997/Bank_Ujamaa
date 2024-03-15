const express = require('express');
const router = express.Router();
const path = require('path');
const { Utilizador } = require('../models/utilizador');


  router.get('/creditos', async (req, resposta) => {
     if (Utilizador.usuarioCorrente != null) {
      resposta.render('dashboard/credito');
     }else{
       resposta.render('warm');
     }
  });

  router.get('/cartoes', (pedido, resposta) => {
    //  if (Utilizador.usuarioCorrente != null) {
      resposta.render('dashboard/cartoes',{nome:Utilizador.usuarioCorrente.nome});
    //  }else{
    //    resposta.render('warm');
    //  }
  });
  router.get('/definicoes', (pedido, resposta) => {
     if (Utilizador.usuarioCorrente != null) {
      resposta.render('dashboard/definicoes');
     }else{
       resposta.render('warm');
     }
  });
   router.get('/depositos', async (req, resposta) => {
     if (Utilizador.usuarioCorrente != null) {
       resposta.render('dashboard/deposito');
     }else{
       resposta.render('warm');
     }
   });

  router.get('/transferencias', async (req, resposta) => {
     if (Utilizador.usuarioCorrente != null) {
      resposta.render('dashboard/transferencia');
     }else{
       resposta.render('warm');
     }
  });
  router.get('/pagamentos', async (req, resposta) => {
     if (Utilizador.usuarioCorrente != null) {
      resposta.render('dashboard/pagamento');
     }else{
       resposta.render('warm');
     }
  });
  router.get('/financas', async (req, resposta) => {
     if (Utilizador.usuarioCorrente != null) {
      resposta.render('dashboard/financas');
     }else{
       resposta.render('warm');
     }
  });
  router.get('/levantamentos', async (req, resposta) => {
     if (Utilizador.usuarioCorrente != null) {
      resposta.render('dashboard/levantamento');
     }else{
       resposta.render('warm');
     }
  });
  router.get('/contactos', async (req, resposta) => {
     if (Utilizador.usuarioCorrente != null) {
      resposta.render('dashboard/contactos');
     }else{
       resposta.render('warm');
     }
  });
  router.get('/logout', async (req, resposta) => {
    Utilizador.usuarioCorrente=null;
    resposta.redirect('/');
  });

module.exports = router;
