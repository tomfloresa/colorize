import { TOGGLE_NOTIFICATION } from "./../constants";

const INITIAL_STATE = {
  isActive: false,
  text: "",
};

const shadowNotificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_NOTIFICATION:
      return {
        isActive: !state.isActive,
        text: action.payload,
      };
    default:
      return state;
  }
};

export default shadowNotificationReducer;
