const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Configuração do body-parser para lidar com POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para servir o formulário HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para lidar com o POST do formulário e calcular a média
app.post('/calcular-media', (req, res) => {
    // Obter os números do corpo da requisição
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    const num3 = parseFloat(req.body.num3);
    const num4 = parseFloat(req.body.num4);

    // Calcular a média
    const media = (num1 + num2 + num3 + num4) / 4;

    // Enviar a média para a página de resultado
    res.redirect(`/resultado?media=${media}`);
});

// Rota para exibir o resultado da média
app.get('/resultado', (req, res) => {
    const media = req.query.media;
    res.send(`<h1>A média dos números é: ${media}</h1>`);
});

// Iniciar o servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
