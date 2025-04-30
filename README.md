# Weather Dashboard

A modern, responsive full-stack weather dashboard application built with React, TypeScript, and Node.js that provides real-time weather information and forecasts.

## 📸 Screenshots

### Light Mode

![Weather Dashboard Light Mode](https://panchamkumarr.github.io/weather_dashboard/screenshot-light.png)

### Dark Mode

![Weather Dashboard Dark Mode](https://panchamkumarr.github.io/weather_dashboard/screenshot-dark.png)

## 🌟 Features

- **Full-Stack Architecture**: Frontend deployed on GitHub Pages, Backend deployed on Render
- **Secure API Handling**: Backend proxy for secure API key management
- **Real-time Weather Data**: Get current weather conditions for any city worldwide
- **5-Day Forecast**: View detailed weather forecasts for the next 5 days
- **Search History**: Keep track of your recently searched cities
- **Dark/Light Mode**: Toggle between dark and light themes for comfortable viewing
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean and intuitive interface using Tailwind CSS

## 🛠️ Technologies Used

### Frontend

- **React 18.3.1** - Frontend framework
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Styling and responsive design
- **Vite** - Build tool and development server

### Backend

- **Node.js** - Server runtime
- **Express** - Web framework
- **TypeScript** - Type safety
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variable management

### APIs and Services

- **OpenWeather API** - Weather data provider
- **GitHub Pages** - Frontend hosting
- **Render** - Backend hosting

### Development Tools

- **Vitest** - Unit testing
- **React Testing Library** - Component testing
- **ESLint** - Code quality and consistency
- **Lucide React** - Modern icons

## 🚀 Live Demo

Frontend: [Weather Dashboard](https://panchamkumarr.github.io/weather_dashboard/)
Backend API: [Weather API](https://weather-dashboard-zyhu.onrender.com/api)

## 💻 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/PanchamKumarr/weather_dashboard.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weather_dashboard
   ```

3. Install frontend dependencies:

   ```bash
   npm install
   ```

4. Install backend dependencies:

   ```bash
   cd backend
   npm install
   ```

5. Create environment files:

   Frontend (.env):

   ```env
   VITE_API_URL=http://localhost:3000/api
   ```

   Backend (.env):

   ```env
   PORT=3000
   WEATHER_API_KEY=your_api_key_here
   ```

6. Start the development servers:

   Backend:

   ```bash
   cd backend
   npm run dev
   ```

   Frontend:

   ```bash
   cd ..
   npm run dev
   ```

The frontend will be available at `http://localhost:5173`
The backend will be available at `http://localhost:3000`

## 🧪 Running Tests

Run the test suite:

```bash
npm test
```

## 📦 Building for Production

Build the application:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🚀 Deployment

### Frontend Deployment (GitHub Pages)

```bash
npm run deploy
```

### Backend Deployment (Render)

The backend is automatically deployed to Render when changes are pushed to the main branch.

Backend environment variables required on Render:

- `NODE_ENV`: production
- `PORT`: 3000
- `WEATHER_API_KEY`: Your OpenWeather API key

## 📱 Features in Detail

- **Current Weather Display**

  - Temperature
  - Weather condition
  - Humidity
  - Wind speed
  - City name

- **5-Day Forecast**

  - Daily temperature
  - Weather conditions
  - Weather icons

- **Search Functionality**

  - City search with autocomplete
  - Search history
  - Error handling for invalid cities

- **Theme Switching**
  - Dark mode support
  - System theme detection
  - Persistent theme preference

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenWeather API for providing weather data
- Tailwind CSS for the awesome styling utilities
- React community for the amazing tools and libraries
