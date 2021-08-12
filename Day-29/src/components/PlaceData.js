import { Grid } from "@material-ui/core";
import "../App.css";

import Search from "./Search";
import WeatherDetails from "./WeatherDetails";

import { useSelector } from "react-redux";


const PlaceData = ({ data: placeData, isPending, error }) => {
  const locations = useSelector((state) => state.locations);

  return (
    <Grid container spacing={4} className="place-info">
      {isPending && <div>Loading...</div>}
      {!isPending && (
        <Grid
          item
          xs
          className="place-box"
          id="location-info"
          style={{ textAlign: "center" }}
        >
          <h1 id="temperature">{placeData.current.temp_c}°</h1>
          <div id="location-name">
            <h2>{placeData.location.name}</h2>
            <sub>Last Updated: {placeData.current.last_updated}</sub>
          </div>
          <div id="conditon">
            <img
              src={placeData.current.condition.icon}
              alt={placeData.current.condition.text}
            />
            <figcaption>{placeData.current.condition.text}</figcaption>
          </div>
        </Grid>
      )}
      <Grid item xs className="place-box" id="weather-info">
        <Search locations={locations} />
        {isPending && <div>Loading...</div>}
        {!isPending && (
          <WeatherDetails
            cloudy={placeData.current.cloud}
            humidity={placeData.current.humidity}
            wind={placeData.current.wind_kph}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default PlaceData;
