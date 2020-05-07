import { TOGGLE_NOTIFICATION } from "../constants";

export const toggleShadowNotification = (text) => ({
  type: TOGGLE_NOTIFICATION,
  payload: text,
});
