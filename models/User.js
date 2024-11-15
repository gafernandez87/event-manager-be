// models/User.js
// const { Pool } = require('pg');
const bcrypt = require('bcrypt');

// const pool = new Pool();

// Función para crear un usuario
const createUser = async (email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const query = 'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email';
  const values = [email, hashedPassword];
  console.log("creating user", {email, password, hashedPassword, query, values});
  return null;
  // const result = await pool.query(query, values);
  // return result.rows[0];
};

// Función para buscar un usuario por email
const findUserByEmail = async (email) => {
  console.log('findUserByEmail', email)
  return null;
  // const query = 'SELECT * FROM users WHERE email = $1';
  // const values = [email];
  // const result = await pool.query(query, values);
  // return result.rows[0];
};

module.exports = { createUser, findUserByEmail };
