import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;
const DB_URL = process.env.DATABASE_URL || '';

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.get('/', (req, res) => {
    res.send('Ram Ram bhai Sareya Ne');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});