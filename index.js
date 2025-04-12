const express = require('express');
const client = require('prom-client');
const collectDefaultMetrics = client.collectDefaultMetrics;
const app = express();
const port = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
  res.json({ message: 'pong1' });
});

collectDefaultMetrics();

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});


if (require.main === module) {
  app.listen(port, () => {
    console.log(`API corriendo en http://localhost:${port}`);
  });
}

module.exports = app;