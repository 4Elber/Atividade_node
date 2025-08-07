const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // para acessar imagens

// Rota do formulário
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Rota do resultado
app.post('/resultado', (req, res) => {
  const n1 = parseFloat(req.body.nota1);
  const n2 = parseFloat(req.body.nota2);
  const n3 = parseFloat(req.body.nota3);
  const media = (n1 + n2 + n3) / 3;

  let resultado, imagem;

  if (media >= 6) {
    resultado = "Aluno Aprovado!";
    imagem = "aprovado.jpg";
  } else {
    resultado = "Aluno Reprovado!";
    imagem = "reprovado.jpg";
  }

  res.send(`
    <h2>Média: ${media.toFixed(2)}</h2>
    <h3>${resultado}</h3>
    <img src="${imagem}" alt="${resultado}" style="width:200px;">
    <br><br><a href="/">Voltar</a>
  `);
});

// Inicia o servidor
const PORTA = 3000;
app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
