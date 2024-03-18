const express = require('express');
const router = express.Router();
const { utilizadoresControlador } = require('../Controller/utilizadoresControlador.js');
const { Utilizador } = require('../models/utilizador.js');
const utilizador = new utilizadoresControlador();
const bcrypt = require('bcrypt');
const { emailSender } = require('../module/mailer.js');

router.use(express.json());

router.get('/', async (req, res) => {
  try {
    const result = await utilizador.index();
    if (!result.sucesso) {
      return res.status(404).json({ message: result.message });
    }
    res.status(200).json({ sucesso: true, data: result.data });
  } catch (error) {
    res.status(500).json({ error: true, message: "Erro no Servidor" });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const result = await utilizador.show(req.params.id);
    if (!result.sucesso) {
      return res.status(404).json({ error: true, message: result.message });
    }
    res.status(200).json({ sucesso: true, data: result.data });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: true, message: "Erro no Servidor" });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const result = await utilizador.destroy(req.params.id);
    if (!result.sucesso) {
      return res.status(404).json({ error: true, message: result.message });
    }
    res.status(200).json({ sucesso: true, message: result.message });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: true, message: "Erro no Servidor" });
  }
});

router.post('/', async (req, res) => {
  try {
    const result = await utilizador.create(req.body);
    if (!result.sucesso) {
      return res.status(400).json({ error: true, message: result.message });
    }
    res.status(200).json({ sucesso: true, message: result.message });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: true, message: "Erro no Servidor" });
  }
});

router.post('/authenticate', async (req, res) => {
  const { email, senha } = req.body;
  const user = await Utilizador.findOne({ where: { email } });
  if (user && (await bcrypt.compare(senha, user.senha))) {
    Utilizador.usuarioCorrente=user;
    res.status(200).json({ sucesso: true, redirectUrl: user.ativo?'/dashboard':'/validacao' });
  } else {
    console.log("Diferentes as senhas");
    return res.status(401).json({ error:true, message: 'Email ou Senha inválida' });
  }
});
router.post('/recovervalidation', async (req, res) => {
  const { email,code } = req.body;
  const user = await Utilizador.findOne({ where: { email } });
  if (user && (await bcrypt.compare(code, user.codeRecuperacao))) {
    res.status(200).json({ sucesso: true, userId:user.id, redirectUrl: '/novascredenciais' });
  } else {
    return res.status(401).json({ error:true, message: 'Código Inválido' });
  }
});

router.post('/recover', async (req, res) => {
  const { email } = req.body;
  const user = await Utilizador.findOne({ where: { email } });
  if (user) {
    const template='/../views/email/templateRecuperacao.ejs';
    const userData = {
      nome: user.nome,
      email:user.email,
      code: Math.floor(1000 + Math.random() * 9000),
      assunto:'Recuperação de Conta'
    };
    const hashedCodeRecuperacao = await bcrypt.hash('' + userData.code, 10);
    user.codeRecuperacao=hashedCodeRecuperacao;
    await user.save();    
    emailSender(userData,template);
    res.status(200).json({ sucesso: true, message:'Código de Recuperação Enviado com Sucesso',redirectUrl: '/validarrecuperacao'});
  } else {
    return res.status(401).json({ error:true, message: 'Utilizador não Existe' });
  }
});

router.post('/confirmacaoconta', async (req, res) => {
  const { email,code } = req.body;
  const user = await Utilizador.findOne({ where: { email }});
  if (user && (await user.chave==code)) {
    console.log("tudo bem");
  }
  if (user && (await user.chave==code)) {
    user.ativo=true;
    await user.save();
    res.status(200).json({ sucesso: true, redirectUrl: '/dashboard'});
  } else {
    res.status(200).json({ sucesso: true, redirectUrl: '/validacao'});
  }
});

router.put('/:id', async (req, res) => {
  try {
  const hashedPassword = await bcrypt.hash(req.body.senha, 10);
    const result = await utilizador.update(req.params.id, {senha:hashedPassword,codeRecuperacao:null}); 
    if (!result.sucesso) {
      return res.status(404).json({ eror: true, message: result.message });
    }
    res.status(200).json({ sucesso: true, message: result.message });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: true, message: "Erro no Servidor" });
  }
});


module.exports = router;
