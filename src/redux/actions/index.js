export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const GET_JOBS = "GET_JOBS";

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

export const addToFavouriteAction = (company) => ({
  type: ADD_TO_FAVOURITES,
  payload: company,
});

export const removeFromFavouriteAction = (company) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: company,
});

export const getJobsAction = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
      } else {
        alert("Errore nel reperimento dei dati.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
