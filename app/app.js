const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Hola desde la app con Istio'));
app.listen(port, () => console.log(`App escuchando en puerto ${port}`));
