# Weather Dashboard Backend

This is the backend server for the Weather Dashboard application. It provides a RESTful API that interfaces with the OpenWeather API to fetch weather data.

## Features

- RESTful API endpoints for weather data
- TypeScript support
- CORS enabled for frontend access
- Environment variable configuration
- Error handling and validation

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenWeather API key

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   WEATHER_API_KEY=your_openweather_api_key
   ```

## Development

To run the server in development mode with hot reloading:

```bash
npm run dev
```

## Production

To build and run the server in production mode:

```bash
npm run build
npm start
```

## API Endpoints

### GET /api/weather/:city

Fetches current weather and 5-day forecast for a specified city.

Parameters:

- `city`: Name of the city (e.g., "London" or "London,UK")

Response:

```json
{
  "weather": {
    "name": "London",
    "main": {
      "temp": 20,
      "humidity": 65
    },
    "weather": [
      {
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "wind": {
      "speed": 5
    }
  },
  "forecast": {
    "list": [
      // 5-day forecast data
    ]
  }
}
```

### GET /api/health

Health check endpoint.

Response:

```json
{
  "status": "ok"
}
```

## Error Handling

The API returns appropriate HTTP status codes and error messages:

- 400: Bad Request (invalid city name)
- 404: City Not Found
- 500: Internal Server Error

Error response format:

```json
{
  "error": "Error message here"
}
```
