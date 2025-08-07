const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Exibe o formulário
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Processa os dados e calcula a resistência
app.post('/calcular', (req, res) => {
  const tensao = parseFloat(req.body.tensao);
  const corrente = parseFloat(req.body.corrente);

  if (corrente === 0) {
    res.send(`<h2>Erro: Corrente não pode ser zero!</h2>`);
    return;
  }

  const resistencia = tensao / corrente;
  res.send(`<h2>A resistência do condutor é: ${resistencia.toFixed(2)} ohms</h2>`);
});

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
