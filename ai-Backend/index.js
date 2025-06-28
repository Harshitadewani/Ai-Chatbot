const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const response = await axios.post(
      'https://api.cohere.ai/v1/chat',
      {
        message: message,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const reply = response.data.text;
    res.json({ reply });
  } catch (err) {
    console.error('❌ Error:', err.response?.data || err.message);
    res.status(500).json({ error: 'AI error' });
  }
});

app.listen(5000, () => {
  console.log('✅ Server running at http://localhost:5000');
});
