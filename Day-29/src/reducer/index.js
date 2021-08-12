import { combineReducers } from "redux";

const placeReducer = (state = "London", action) => {
  if (action.type === "UPDATE_PLACE") {
    console.log(action.payload);
    return action.payload;
  }
  return state;
};

const locationsReducer = (
  state = ["London", "Mumbai", "New York", "Barcelona"],
  action
) => {
  if (action.type === "ADD_LOCATION") {
    state.pop();
    return [action.payload, ...state];
  }
  return state;
};

const rootReducer = combineReducers({
  place: placeReducer,
  locations: locationsReducer,
});

export default rootReducer;
