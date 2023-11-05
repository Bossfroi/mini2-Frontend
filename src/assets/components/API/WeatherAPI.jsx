import React, { useState, useEffect } from 'react';
import axios from 'axios';


const API_KEY = '1b0b82bb0a62e61b3dd408ab1846beb7';

function WeatherAPI() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('manila');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
        );
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [location]);

  return (
    <div className="bg-blue-300 p-4 rounded-lg shadow-lg m-2">
      <h1 className="text-3xl font-semibold mb-4 text-center text-blue-600">Weather at Your Location</h1>
  
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // Fetch data for the new location
          setLocation(e.target.location.value);
        }}
        className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 space-x-0 md:space-x-4 mb-4 justify-between lg:w-2/3 xl:w-3/4 mx-auto mt-4"
      >
        <div className="md:w-60 flex-shrink-0">
          <input
            type="text"
            name="location"
            placeholder="Enter city or country"
            className="w-full p-2 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="w-full md:flex-shrink-0">
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Search
          </button>
        </div>
      </form>
  
      {loading && <p className="text-blue-600 text-center">Loading...</p>}
      {error && <p className="text-red-600 text-center">Error: {error.message}</p>}
      {weatherData && (
        <div className="bg-white p-4 rounded-lg shadow-lg lg:w-2/3 xl:w-3/4 mx-auto mt-4">
        <h2 className="text-2xl font-semibold text-blue-600 text-center mb-4">
          Weather in {weatherData.name}, {weatherData.sys.country}
        </h2>
      
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="col-span-1">
            <p className="text-blue-700">Temperature: {weatherData.main.temp}°C</p>
          </div>
          <div className="col-span-1">
            <p className="text-blue-700">Humidity: {weatherData.main.humidity}%</p>
          </div>
          <div className="col-span-1">
            <p className="text-blue-700">Weather: {weatherData.weather[0].description}</p>
          </div>
          <div className="col-span-1">
            <p className="text-blue-700">Wind Speed: {weatherData.wind.speed} m/s</p>
          </div>
          <div className="col-span-1">
            <p className="text-blue-700">Visibility: {weatherData.visibility / 1000} km</p>
          </div>
          <div className="col-span-1">
            <p className="text-blue-700">
              Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
            </p>
          </div>
          <div className="col-span-1">
            <p className="text-blue-700">
              Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
            </p>
          </div>
        </div>
      </div>
     
      )}
    </div>
    
  );
  
}

export default WeatherAPI;
