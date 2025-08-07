const http = require('http');

const server = http.createServer((req, res) => {
  // Obter data e hora atuais
  const agora = new Date();
  const dataHora = agora.toLocaleString('pt-BR', {
    dateStyle: 'full',
    timeStyle: 'medium'
  });

  // Página HTML com a data/hora
  const html = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Data e Hora</title>
    </head>
    <body>
      <h1>Data e Hora Atual</h1>
      <p>${dataHora}</p>
    </body>
    </html>
  `;

  // Enviar resposta
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
});

const PORTA = 3000;
server.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
