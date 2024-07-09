export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

export const addToFavouriteAction = (company) => ({
  type: ADD_TO_FAVOURITES,
  payload: company,
});

export const removeFromFavouriteAction = (company) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: company,
});
