const axios = require('axios');

async function weather(req, res) {
    const { lat, lon } = req.body; // Extract latitude and longitude from query parameters
    const apiKey = 'a6d7e10c2d5b274be4c995bfd6c5635a'; // OpenWeatherMap API key
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    try {
        const response = await axios.get(weatherUrl); // Fetch weather data
        const weatherData = response.data;

        res.json({
            status: true,
            data: weatherData, // Send the fetched data as "data"
        });
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        res.status(500).json({
            success: false,
            msgCode: 500,
            msg: getMessageByCode(500),
          });
    }
}

module.exports = { weather };
