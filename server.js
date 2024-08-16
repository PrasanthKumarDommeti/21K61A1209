const express = require('express');
const axios = require('axios');
const app = express();

const API_URL = 'http://20.244.56.144/test'; // Replace with your actual API URL
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIzNzkwOTYxLCJpYXQiOjE3MjM3OTA2NjEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijk3ZDFlNTJkLWFiOGItNDY4NC1iOTI1LTZlZWJlZjhmMWQ0MCIsInN1YiI6InByYXNhbnRoLmRvbW1ldGlAc2FzaS5hYy5pbiJ9LCJjb21wYW55TmFtZSI6IlNhc2kgSW5zdGl0dXRlIE9mIFRlY2hub2xvZ3kgXHUwMDI2IEVuZ2luZWVyaW5nIiwiY2xpZW50SUQiOiI5N2QxZTUyZC1hYjhiLTQ2ODQtYjkyNS02ZWViZWY4ZjFkNDAiLCJjbGllbnRTZWNyZXQiOiJGeFFFR2FoZ1dqbmp3RGxwIiwib3duZXJOYW1lIjoiUHJhc2FudGggS3VtYXIgRG9tbWV0aSIsIm93bmVyRW1haWwiOiJwcmFzYW50aC5kb21tZXRpQHNhc2kuYWMuaW4iLCJyb2xsTm8iOiIyMUs2MUExMjA5In0.mVp8-6mvFu4p6xMgQZuay2juzHNLeOZcP-AcTG7G1a8"; // Replace with your actual token

app.use('/api', async (req, res) => {
  try {
    const url = `${API_URL}${req.url}`;
    console.log(`Request URL: ${url}`);
    console.log(`Request Query: ${JSON.stringify(req.query)}`);
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`
      },
      params: req.query
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from API:', error.message);
    console.error('Error details:', error.response ? error.response.data : error.message);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/test', async (req, res) => {
    try {
      const response = await axios.get(`${API_URL}/test`, {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`
        }
      });
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching test data:', error.message);
      res.status(500).send('Internal Server Error');
    }
  });
  

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
