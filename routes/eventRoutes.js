const express = require('express');
const router = express.Router();

const events = [
    { id: 1, title: 'Fiesta de 15 Giuli', eventDate: '2023-12-15' },
    { id: 2, title: 'Casamiento Carolina', eventDate: '2023-10-10' },
    { id: 3, title: 'Seminario Anual 2024', eventDate: '2024-06-01' },
];

router.get('/events', (req, res) => {
    res.json(events);
});

module.exports = router;