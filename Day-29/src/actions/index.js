const updatePlace = (place) => {
  return { type: "UPDATE_PLACE", payload: place };
};

const addLocation = (location) => {
  return { type: "ADD_LOCATION", payload: location };
};

export { updatePlace, addLocation };
