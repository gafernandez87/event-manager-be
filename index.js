// app.js
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const { json, urlencoded } = require('body-parser');


const app = express();

// middlewares
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

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
