import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const setColor = (temperature) => {
  let color = "";
  if (temperature <= 10) {
    color = "blue";
  } else if (temperature > 10 && temperature <= 25) {
    color = "orange";
  } else {
    color = "red";
  }
  return color;
};

const Forecast = ({ data }) => {
  const day = new Date().getDay();
  const forecastDays = week.slice(day, 7).concat(week.slice(0, day));

  return (
    <>
      <label className="title">Forecast</label>
      <Accordion allowMultipleExpanded allowZeroExpanded>
        {data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemButton>
              <div
                className="dailyWeather"
                style={{
                  backgroundColor: setColor(item.main.temp),
                }}
              >
                <img
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  className="forecastIcon"
                  alt="weather"
                />
                <label className="day">{forecastDays[idx]}</label>
                <label className="description">
                  {item.weather[0].description}
                </label>
                <label className="temp">
                  {Math.round(item.main.temp_min)}°C -{" "}
                  {Math.round(item.main.temp_max)}°C
                </label>
              </div>
            </AccordionItemButton>
            <AccordionItemPanel>
              <div className="forecast">
                <div className="day-weather">
                  <label>Feels like:</label>
                  <label>{item.main.feels_like}°C</label>
                </div>
                <div className="day-weather">
                  <label>Wind speed:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="day-weather">
                  <label>Humidity:</label>
                  <label>{item.main.humidity}</label>
                </div>
                <div className="day-weather">
                  <label>Pressure:</label>
                  <label>{item.main.pressure}hPa</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
