import { CHANGE_SECTION } from "./../constants";

const INITIAL_STATE = {
  currentSection: "",
};

const routerSectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_SECTION:
      return {
        currentSection: action.payload,
      };
    default:
      return state;
  }
};

export default routerSectionReducer;
