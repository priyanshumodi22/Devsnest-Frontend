import "../App.css";

const WeatherDetails = ({ cloudy, humidity, wind }) => {
  return (
    <div className="details">
      <p>
        <strong>Weather Details</strong>
      </p>
      <table>
        <tr>
          <td>Cloudy</td>
          <td className="value">
            <strong>{cloudy}%</strong>
          </td>
        </tr>
        <tr>
          <td>Humidity</td>
          <td className="value">
            <strong>{humidity}%</strong>
          </td>
        </tr>
        <tr>
          <td>Wind</td>
          <td className="value">
            <strong>{wind}km/h</strong>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WeatherDetails;
