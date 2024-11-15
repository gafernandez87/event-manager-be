// supabase.js
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// URL y API Key de tu proyecto Supabase
const supabaseUrl = 'https://ucwfhigrzrhvzhhadfrw.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;

// Crea el cliente Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
