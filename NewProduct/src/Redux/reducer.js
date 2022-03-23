import {
    GET_CLICKED_DATA_FAILURE,
    GET_CLICKED_DATA_REQ,
    GET_CLICKED_DATA_SUCCESS,
    GET_DATA_FAILURE,
    GET_DATA_REQ,
    GET_DATA_SUCCESS,
    SORT_DATA,
  } from "./actionTypes";
  
  const initState = {
    products: [],
    isLoading: false,
    isError: false,
    sortedProds: [],
    clickedProd: [],
  };
  
  export const Reducer = (state = initState, { type, payload }) => {
    // add the switch statement for different actions
    switch (type) {
      case GET_DATA_REQ:
        return {
          ...state,
          isLoading: true,
        };
      case GET_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          products: [...payload],
          sortedProds: [...payload],
          isError: false,
        };
      case GET_DATA_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case SORT_DATA:
        if (payload == "--sort by --")
          return {
            ...state,
            sortedProds: [...state.products],
          };
        else if (payload == "asc")
          return {
            ...state,
            sortedProds: [...state.sortedProds.sort((a, b) => a.price - b.price)],
          };
        else if (payload == "desc")
          return {
            ...state,
            sortedProds: [...state.sortedProds.sort((a, b) => b.price - a.price)],
          };
  
      case GET_CLICKED_DATA_REQ:
        return {
          ...state,
          isLoading: true,
        };
      case GET_CLICKED_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          clickedProd: payload,
          isError: false,
        };
      case GET_CLICKED_DATA_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
  
      default:
        return state;
    }
  };
  