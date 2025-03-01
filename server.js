require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Dice Roller API
app.get('/roll', (req, res) => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    res.json({ roll: diceRoll });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
