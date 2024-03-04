const express = require('express');
const router = express.Router();
const { utilizadoresControlador } = require('../Controller/utilizadoresControlador.js')
const utilizador = new utilizadoresControlador();

router.use(express.json());

router.get('/', async (req, res) => {
  try {
    const result = await utilizador.index();
    if (!result.sucesso) {
      return res.status(404).json({ message: result.message });
    }
    res.status(200).json({sucesso:true,data:result.data});
  } catch (error) {
    res.status(500).json({ error:true, message: "Erro no Servidor" });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const result = await utilizador.show(req.params.id);
    if (!result.sucesso) {
      return res.status(404).json({error:true, message: result.message });
    }
    res.status(200).json({sucesso:true,data:result.data});
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error:true, message: "Erro no Servidor" });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const result = await utilizador.destroy(req.params.id);
    if (!result.sucesso) {
      return res.status(404).json({error:true, message: result.message });
    }
    res.status(200).json({sucesso:true, message: result.message });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error:true, message: "Erro no Servidor" });
  }
});

router.post('/', async (req, res) => {
  try {
    console.log(req.body);
      const result = await utilizador.create(req.body);
      if (!result.sucesso) {
        return res.status(400).json({error:true,message: result.message});
      }
    res.status(200).json({sucesso:true, result });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error:true, message: "Erro no Servidor" });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const result = await utilizador.update(req.params.id, req.body);
    if (!result.sucesso) {
      return res.status(404).json({eror:true, message: result.message });
    }
    res.status(200).json({sucesso:true, message: result.message });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error:true, message: "Erro no Servidor" });
  }
});

module.exports = router;
