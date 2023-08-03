import React from "react";

import "./Weather.css";

const giveDate = (date) => {
  let week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let weekday = week[date.getDay()];
  let day = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear();

  return `${weekday} ${day} ${month} ${year}`;
};

const Capit = (s) => {
  return s
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const Weather = ({ data }) => {
  let color = "";
  let temperature = data.main.temp;
  if (temperature <= 10) {
    color = "blue";
  } else if (temperature > 10 && temperature <= 25) {
    color = "orange";
  } else {
    color = "red";
  }

  const boxShadow = `10px 5px 5px ${color}`;

  return (
    <div className="weather" style={{ boxShadow }}>
      <div className="main">
        <div>
          <p className="city"> {data.city} </p>
          <p className="data"> {giveDate(new Date())} </p>
          <p className="data"> {Capit(data.weather[0].description)}</p>
        </div>
        <img
          alt="weather"
          className="weatherIcon"
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        />
      </div>
      <div className="extra">
        <p className="temperature"> {Math.round(data.main.temp)}°C </p>
        <div className="details">
          <div className="row">
            <span className="label">Feels like</span>
            <span className="value">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="row">
            <span className="label">Wind</span>
            <span className="value"> {data.wind.speed}m/s </span>
          </div>
          <div className="row">
            <span className="label">Humidity</span>
            <span className="value"> {data.main.humidity}%</span>
          </div>
          <div className="row">
            <span className="label">Pressure </span>
            <span className="value">{data.main.pressure}hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
