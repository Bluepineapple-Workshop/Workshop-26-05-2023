import React, { useState } from "react";
import Weatherdata from "../WeatherInputs.json";
import WeatherDetails from "./WeatherDetails";
import "./Weather.css";
const Weather = () => {
  const [data, setData] = useState({
    name: "",
    weather: "",
    temp: "",
    humidity: "",
  });

  const onViewData = async (name, lat, lon) => {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e01153ed44fc84bde4b89f7595d53ada`,
      {
        method: "POST",
      }
    );

    const weatherdata = await data.json();
    console.log(weatherdata);
    setData({
      name: weatherdata.name,
      weather: weatherdata.weather[0].main,
      temp: (weatherdata.main.temp - 273.15).toFixed(2),
      humidity: weatherdata.main.humidity,
    });
  };

  return (
    <div style={{ marginLeft: "5%", marginRight: "5%", padding: "2%" }}>
      <h1>Weather by City</h1>
      <div
        style={{
          display: "flex",
          marginTop: "5%",
          padding: "1%",
        }}>
        <div
          style={{
            width: "50%",
            textAlign: "left",
          }}>
          <table>
            <tbody>
              <tr>
                <th style={{ width: "75%" }}>City</th>
                <th style={{ textAlign: "center" }}>Action</th>
              </tr>
              {Weatherdata.map((location, index) => (
                <tr key={index}>
                  <td style={{ textAlign: "left" }}>{location.name}</td>
                  <td style={{ textAlign: "center" }}>
                    <button
                      style={{
                        backgroundColor: "orange",
                        color: "white",
                        borderRadius: "7px",
                        width: "70%",
                        padding: "2%",
                      }}
                      onClick={() =>
                        onViewData(location.name, location.lat, location.lon)
                      }>
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          style={{
            width: "50%",
            marginLeft: "5%",
            marginRight: "5%",
          }}>
          <WeatherDetails {...data} />
        </div>
      </div>
    </div>
  );
};

export default Weather;
