export const GET_STATES = "GET_STATES";
export const GET_CITIES = "GET_CITIES";
export const SET_CITY = "SET_CITY";

export const getStates = () => {
  return async (dispatch) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/estados/`, {
      method: "GET",
    });

    const states = await response.json();

    dispatch({ type: GET_STATES, payload: states });
  };
};

export const getCities = (stateId) => {
  return async (dispatch) => {
    if (!stateId) {
      dispatch({ type: GET_CITIES, payload: [] });
    }

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/estados/${stateId}/municipios`,
      {
        method: "GET",
      }
    );

    const cities = await response.json();

    dispatch({ type: GET_CITIES, payload: cities });
  };
};

export const setCity = (city) => {
  return (dispatch) => {
    dispatch({ type: SET_CITY, payload: city });
  };
};
