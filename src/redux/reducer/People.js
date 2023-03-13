import React from "react";
const initialState = {
  popularPeople: [],
};
const People = (state = initialState, action) => {
  switch (action.type) {
    case "SAGA_POPULAR_PEOPLE":
      return {
        popularPeople: [...action.payload.data.results],
      };

    default:
      return state;
  }
};

export default People;
