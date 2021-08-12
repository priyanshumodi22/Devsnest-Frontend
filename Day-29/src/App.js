import "./App.css";
import useFetch from "./helper/useFetch";
import { Container } from "@material-ui/core";
import PlaceData from "./components/PlaceData";
import { useSelector } from "react-redux";

function App() {
  const place = useSelector((state) => state.place);
  const BASE_URL = `https://obscure-chamber-63755.herokuapp.com/http://api.weatherapi.com/v1/current.json?key=d82f0c5dabb34168a81111352210408&q=${place}`;
  const { data, isPending, error } = useFetch(BASE_URL);
  return (
    <div className="App">
      {isPending && <h1>Loading...</h1>}
      {error && <div>{error}</div>}
      {!isPending && !error && (
        <Container maxWidth="sm">
          <PlaceData data={data} isPending={isPending} error={error} />
        </Container>
      )}
    </div>
  );
}

export default App;
