require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./config/db'); // atau './config/database' kalau kamu pakai file itu
const db = require('./models');
const apiRoutes = require('./routes/api');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Gunakan semua route dari routes/api.js
app.use('/api', apiRoutes);

// Jalankan server & sync database
const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => console.log('✅ Koneksi ke database berhasil'))
  .catch(err => console.error('❌ Gagal koneksi:', err));

sequelize.sync({ alter: true })
  .then(() => {
    console.log('✅ Database disinkronisasi');
    app.listen(PORT, () => {
      console.log(`🚀 Server aktif di http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error('❌ Gagal sync DB:', err));

  app.get('/', (req, res) => {
  res.send('APIKey Generator aktif 🚀');
});