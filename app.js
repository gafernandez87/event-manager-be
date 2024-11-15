// app.js
const express = require('express');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = 3000;

app.use(express.json());
app.get('/', (req, res) => {
  res.send('PONG');
});
app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
