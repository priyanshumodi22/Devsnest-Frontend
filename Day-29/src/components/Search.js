import { Input } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";

import { useState } from "react";

import { updatePlace, addLocation } from "../actions";
import store from "../store";

const Search = ({ locations }) => {
  const [searchStr, setSearchStr] = useState("");
  return (
    <div className="search-items">
      <div id="search-bar">
        <Input
          id="input"
          placeholder="Another Location"
          onChange={(e) => setSearchStr(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              store.dispatch(addLocation(e.target.value));
              store.dispatch(updatePlace(e.target.value));
              e.target.value = "";
            }
          }}
        />
        <SearchOutlined
          id="search-icon"
          onClick={() => {
            store.dispatch(updatePlace(searchStr));
            setSearchStr("");
          }}
        ></SearchOutlined>
      </div>
      <ul id="locations">
        {locations.map((location, index) => {
          return (
            <li
              onClick={() => store.dispatch(updatePlace(location))}
              key={index}
            >
              {location}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Search;
