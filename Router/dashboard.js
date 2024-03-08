const express = require('express');
const router = express.Router();
const path = require('path');
// const { utilizadoresControlador } = require('../Controller/utilizadoresControlador.js')
// const utilizador = new utilizadoresControlador();

router.get('/creditos', async (req, resposta) => {
  resposta.render('dashboard/credito'); 
});
// router.get('/clientes', async (req, resposta) => {
//   resposta.render('dashboard/cliente');  
// });
router.get('/cartoes', (pedido, resposta) => {
  resposta.render('dashboard/cartoes');
});
router.get('/definicoes', (pedido, resposta) => {
  resposta.render('dashboard/definicoes');
});
 router.get('/depositos', async (req, resposta) => {
   resposta.render('dashboard/deposito');  
 });
router.get('/transferencias', async (req, resposta) => {
  resposta.render('dashboard/transferencia');  
});
router.get('/pagamentos', async (req, resposta) => {
  resposta.render('dashboard/pagamento');  
});
router.get('/financas', async (req, resposta) => {
  resposta.render('dashboard/financas');  
});
router.get('/levantamentos', async (req, resposta) => {
  resposta.render('dashboard/levantamento');  
});
router.get('/funcionarios', async (req, resposta) => {
  resposta.render('dashboard/funcionarios'); 
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
