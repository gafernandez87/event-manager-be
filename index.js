// app.js
const express = require('express');
const cors = require('cors');

const { json, urlencoded } = require('body-parser');

const app = express();

// Routes
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');

// middlewares
const authenticated = require('./middlewares/authMiddleware'); // Importa el middleware de autenticación

app.use(json());
app.use(cors());
app.use(
    urlencoded({
        extended: true,
    })
);

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('PONG');
});
app.use('/api/auth', authRoutes);
app.use('/api', eventRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
