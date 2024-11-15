const express = require('express');
const router = express.Router();
const supabase = require('../config/db');

router.get('/events', async (req, res) => {

    try {
        const { data, error } = await supabase.from('events').select('*');

        if (error) throw error;
    
        res.json(data);
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
});

router.get('/events/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const { data, error } = await supabase.from('events').select('*').eq('id', id).maybeSingle();
        if (error) throw error;

        res.json(data);
    } catch (error) {
        console.error('Error al obtener el evento:', error);
        res.status(500).json({ message: 'Error al obtener el evento' });
    }
}); 

router.get('/events/:id/guests', async (req, res) => {
    const { id } = req.params;
    try {
        const { data, error } = await supabase.from('guests').select('*').eq('event_id', id);
        if (error) throw error;

        res.json(data);
    } catch (error) {
        console.error('Error al obtener el invitados:', error);
        res.status(500).json({ message: 'Error al obtener invitados' });
    }
}); 


module.exports = router;