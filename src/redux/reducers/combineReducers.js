import { combineReducers } from "redux";

// Reducers
import shadowNotificationReducer from "./shadowNotificationReducer";

export default combineReducers({
  shadowNotification: shadowNotificationReducer,
});
