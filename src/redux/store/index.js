import { combineReducers, configureStore } from "@reduxjs/toolkit";
//import mainReducer from "../reducers";
import favouriteReducer from "../reducers/favourite";

const rootReducer = combineReducers({
  favourites: favouriteReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
