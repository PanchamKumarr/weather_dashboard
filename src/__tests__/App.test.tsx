import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// Mock the useWeather hook
vi.mock('../hooks/useWeather', () => ({
  useWeather: () => ({
    weather: {
      name: 'London',
      main: { temp: 20, humidity: 65 },
      weather: [{ description: 'clear sky', icon: '01d' }],
      wind: { speed: 5 },
    },
    forecast: {
      list: Array(5).fill({
        dt_txt: '2024-02-28 12:00:00',
        main: { temp: 20 },
        weather: [{ main: 'Clear', icon: '01d' }],
      }),
    },
    loading: false,
    error: null,
    fetchWeather: vi.fn(),
  }),
}));

describe('Weather Dashboard', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it('renders the search bar', () => {
    render(<App />);
    expect(screen.getByPlaceholderText(/enter city/i)).toBeInTheDocument();
  });

  it('toggles theme', async () => {
    render(<App />);
    const themeButton = screen.getByTitle(/switch to dark mode/i);
    
    await userEvent.click(themeButton);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    
    await userEvent.click(themeButton);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('shows weather data', () => {
    render(<App />);
    expect(screen.getByText(/london/i)).toBeInTheDocument();
    expect(screen.getByText(/20°c/i)).toBeInTheDocument();
    expect(screen.getByText(/clear sky/i)).toBeInTheDocument();
  });

  it('maintains search history', async () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/enter city/i);
    
    await userEvent.type(searchInput, 'London{enter}');
    await userEvent.type(searchInput, 'Paris{enter}');
    
    expect(screen.getByText('London')).toBeInTheDocument();
    expect(screen.getByText('Paris')).toBeInTheDocument();
  });

  it('persists theme preference', () => {
    // Set dark theme in localStorage
    localStorage.setItem('theme', 'dark');
    render(<App />);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });
});