const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para exibir o formulário
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para calcular o preço final
app.post('/calcular', (req, res) => {
  const preco = parseFloat(req.body.preco);
  const quantidade = parseFloat(req.body.quantidade);
  const desconto = parseFloat(req.body.desconto);

  const total = (preco * quantidade) - desconto;

  res.send(`<h2>O preço final do produto é: R$ ${total.toFixed(2)}</h2>`);
});

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
