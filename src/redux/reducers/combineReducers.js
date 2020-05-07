import { combineReducers } from "redux";

// Reducers
import routerSectionReducer from "./routerSectionReducer";

export default combineReducers({
  routerSection: routerSectionReducer,
});
