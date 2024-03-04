const express = require('express');
const router = express.Router();
const path = require('path');
// const { utilizadoresControlador } = require('../Controller/utilizadoresControlador.js')
// const utilizador = new utilizadoresControlador();

router.get('/creditos', async (req, resposta) => {
  resposta.sendFile(path.join(__dirname, '../View/dashboard/credito.html')); 
});
router.get('/clientes', async (req, resposta) => {
  resposta.sendFile(path.join(__dirname, '../View/dashboard/cliente.html')); 
});
router.get('/financas', async (req, resposta) => {
  resposta.sendFile(path.join(__dirname, '../View/dashboard/financas.html')); 
});
router.get('/empresas', async (req, resposta) => {
  resposta.sendFile(path.join(__dirname, '../View/dashboard/empresas.html')); 
});
router.get('/funcionarios', async (req, resposta) => {
  resposta.sendFile(path.join(__dirname, '../View/dashboard/funcionarios.html')); 
});

// router.get('/:id', async (req, res) => {
//   try {
//     const result = await utilizador.show(req.params.id);
//     if (!result.success) {
//       return res.status(404).json({ message: result.message });
//     }
//     res.status(200).json(result.data);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ message: "Erro no Servidor" });
//   }
// });

// router.post('/', async (req, res) => {
//   try {
//     const result = await utilizador.create(req.body);
//     if (!result.success) {
//       return res.status(400).json({ message: result.message });
//     }
//     res.status(201).json({ result });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ message: "Erro no Servidor" });
//   }
// });

// router.put('/:id', async (req, res) => {
//   try {
//     const result = await utilizador.update(req.params.id, req.body);
//     if (!result.success) {
//       return res.status(404).json({ message: result.message });
//     }
//     res.status(200).json({ message: result.message });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ message: "Erro no Servidor" });
//   }
// });

// router.delete('/:id', async (req, res) => {
//   try {
//     const result = await utilizador.destroy(req.params.id);
//     if (!result.success) {
//       return res.status(404).json({ message: result.message });
//     }
//     res.status(200).json({ message: result.message });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ message: "Erro no Servidor" });
//   }
// });

module.exports = router;
