import "./App.css";

import Search from "./components/search";

import Weather from "./components/Weather";

import Forecast from "./components/forecast";

import { WEATHERurl, WEATHERkey } from "./api";

import React, { useState, useEffect } from "react";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const emptySearch = async () => {
    const currentWeather = await fetch(
      `${WEATHERurl}/weather?lat=51.507222222&lon=-0.1275&appid=${WEATHERkey}&units=metric`
    );
    const forecastWeather = await fetch(
      `${WEATHERurl}/forecast?lat=51.507222222&lon=-0.1275&appid=${WEATHERkey}&units=metric`
    );
    const weatherResponse = await currentWeather.json();
    const forecastResponse = await forecastWeather.json();
    setCurrentWeather({ city: "London, GB", ...weatherResponse });
    setForecastWeather({ city: "London, GB", ...forecastResponse });
  };

  const handleSearch = async (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentWeather = await fetch(
      `${WEATHERurl}/weather?lat=${lat}&lon=${lon}&appid=${WEATHERkey}&units=metric`
    );
    const forecastWeather = await fetch(
      `${WEATHERurl}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHERkey}&units=metric`
    );
    const weatherResponse = await currentWeather.json();
    const forecastResponse = await forecastWeather.json();
    setCurrentWeather({ city: searchData.label, ...weatherResponse });
    setForecastWeather({ city: searchData.label, ...forecastResponse });
  };

  useEffect(() => {
    emptySearch();
  }, []);

  return (
    <div className="container">
      <Search className="search" handleSearch={handleSearch} />
      {currentWeather && <Weather data={currentWeather} />}
      {forecastWeather && <Forecast data={forecastWeather} />}
    </div>
  );
}

export default App;
