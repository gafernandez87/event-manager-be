const bcrypt = require('bcrypt');
const supabase = require('../config/db');

const createUser = async (email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const { data, error } = await supabase
    .from('users')
    .insert([{ email, password: hashedPassword }])
    .select('id, email')
    .maybeSingle();

  if (error) throw error;

  return data;
};

const findUserByEmail = async (email) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .maybeSingle();

  if (error) throw error;

  return data;
};

module.exports = { createUser, findUserByEmail };
