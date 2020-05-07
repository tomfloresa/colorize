import { CHANGE_SECTION } from "../constants";

export const changeCurrentSection = (newSection) => ({
  type: CHANGE_SECTION,
  payload: newSection,
});
