require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();

const frontend1 = process.env.FONTEND1;
const frontend2 = process.env.FONTEND2;
const allowedOrigins = [frontend1, frontend2];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/auth', authRoutes);

const port = process.env.PORTBACKEND || 5000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
