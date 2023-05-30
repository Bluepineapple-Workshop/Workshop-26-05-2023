import React from "react";

const WeatherDetails = (props) => {
  const { name, temp, humidity, weather } = props;
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td style={{ textAlign: "left", fontWeight: "bold" }}>Name</td>
            <td style={{ width: "50%" }}>{name ? name : "..."}</td>
          </tr>
          <tr>
            <td style={{ textAlign: "left", fontWeight: "bold" }}>Weather</td>
            <td>{weather ? weather : "..."}</td>
          </tr>
          <tr>
            <td style={{ textAlign: "left", fontWeight: "bold" }}>
              Temperature
            </td>
            <td>{temp ? temp : "..."} &#8451;</td>
          </tr>
          <tr>
            <td style={{ textAlign: "left", fontWeight: "bold" }}>Humidity</td>
            <td>{humidity ? humidity : "..."}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeatherDetails;
