// app.js
const express = require('express');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
