const express = require('express');
const router = express.Router();
const supabase = require('../config/db');

router.get('/events', async (req, res) => {

    try {
        const { data, error } = await supabase.from('events').select('*').eq('user_id', req.user.id);

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
        const { data, error } = await supabase.from('events').select('*').eq('id', id).eq('user_id', req.user.id).maybeSingle();
        if (error) throw error;

        res.json(data);
    } catch (error) {
        console.error('Error al obtener el evento:', error);
        res.status(500).json({ message: 'Error al obtener el evento' });
    }
}); 

router.get('/events/:id/guests', async (req, res) => {
    const { id } = req.params;
    res.json([]);
    
    // try {
    //     const { data, error } = await supabase.from('guests').select('*').eq('event_id', id).eq('user_id', req.user.id);
    //     if (error) throw error;

    //     res.json(data);
    // } catch (error) {
    //     console.error('Error al obtener el invitados:', error);
    //     res.status(500).json({ message: 'Error al obtener invitados' });
    // }
}); 

router.post('/events', async (req, res) => {
    const { eventName, eventDate, notes } = req.body;
    try {
        const { data, error } = await supabase.from('events').insert([{ event_name: eventName, event_date: eventDate, notes, user_id: req.user.id }]);
        if (error) throw error;

        res.json(data);
    } catch (error) {
        console.error('Error al crear el evento:', error);
        res.status(500).json({ message: error });
    }
});

module.exports = router;