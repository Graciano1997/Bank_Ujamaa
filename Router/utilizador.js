const express = require('express');
const router = express.Router();
const { utilizadoresControlador } = require('../Controller/utilizadoresControlador.js');
const { Utilizador } = require('../models/utilizador.js');
const utilizador = new utilizadoresControlador();
const bcrypt = require('bcrypt');
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
    res.status(200).json({ sucesso: true, redirectUrl: '/dashboard' });
  } else {
    return res.status(401).json({ error: 'Email ou Senha inválida' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const result = await utilizador.update(req.params.id, req.body);
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
