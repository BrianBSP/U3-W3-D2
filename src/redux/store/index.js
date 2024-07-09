import { combineReducers, configureStore } from "@reduxjs/toolkit";
//import mainReducer from "../reducers";
import favouriteReducer from "../reducers/favourite";
import jobReducer from "../reducers/job";

const rootReducer = combineReducers({
  favourites: favouriteReducer,
  job: jobReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
