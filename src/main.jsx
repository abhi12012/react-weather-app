import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { WeatherProvider } from "./context/WeatherContext";
import WeatherContext from "./context/WeatherContext";
import ErrorBoundary from "./components/ErrorBoundary";

import ErrorTest from "./components/ErrorTest";



createRoot(document.getElementById('root')).render(
  <WeatherProvider>
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
</WeatherProvider>
)