import { GET_CITIES, GET_STATES, SET_CITY } from "./actions";

const initialState = { states: [], cities: [], city: undefined };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATES:
      return { ...state, ...{ states: action.payload } };
    case GET_CITIES:
      return { ...state, ...{ cities: action.payload } };
    case SET_CITY:
      return { ...state, ...{ city: action.payload } };
    default:
      return state;
  }
};
