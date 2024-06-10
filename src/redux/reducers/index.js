import { combineReducers } from "redux";
import filterReducer from "./filter.js";
import toursReducer from "./tours.js";
import authReducer from "./authReducer.js";

const rootReducer = combineReducers({
  filters: filterReducer,
  tours: toursReducer,
  auth: authReducer,
});

export default rootReducer;
