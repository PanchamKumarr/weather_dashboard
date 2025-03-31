import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Weather API configuration
const WEATHER_API_KEY = process.env.WEATHER_API_KEY || '73f89cf97a42051b8ec7f0e2a8f89941';
const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Types
interface WeatherResponse {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
}

interface ForecastResponse {
  list: Array<{
    dt_txt: string;
    main: {
      temp: number;
    };
    weather: Array<{
      main: string;
      icon: string;
    }>;
  }>;
}

// Routes
app.get('/api/weather/:city', async (req, res) => {
  try {
    const { city } = req.params;
    const encodedCity = encodeURIComponent(city);

    const [weatherResponse, forecastResponse] = await Promise.all([
      axios.get(`${WEATHER_BASE_URL}/weather`, {
        params: {
          q: encodedCity,
          appid: WEATHER_API_KEY,
          units: 'metric'
        }
      }),
      axios.get(`${WEATHER_BASE_URL}/forecast`, {
        params: {
          q: encodedCity,
          appid: WEATHER_API_KEY,
          units: 'metric'
        }
      })
    ]);

    const weatherData: WeatherResponse = weatherResponse.data;
    const forecastData: ForecastResponse = forecastResponse.data;

    res.json({
      weather: weatherData,
      forecast: forecastData
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      res.status(error.response?.status || 500).json({
        error: error.response?.data?.message || 'Failed to fetch weather data'
      });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 