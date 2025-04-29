require('dotenv').config();
const mongoose = require('mongoose');

const {
  DB_USER,
  DB_PASS,
  DB_CLUSTER,
  DB_NAME
} = process.env;

const mongoUri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_CLUSTER}/${DB_NAME}?retryWrites=true&w=majority&appName=Tudo-api`;

mongoose.connect(mongoUri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Connection error:', err));