import React from "react";
const initialState = {
  search: [],
};
const Search = (state = initialState, action) => {
  switch (action.type) {
    case "SAGA_SEARCH":
       
      return {
        search: [...action.payload.data.results],
      };

    default:
      return state;
  }
};

export default Search;
