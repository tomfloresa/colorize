import axios from "axios";

const ENDPOINT = "https://reqres.in/api/colors";

export const getColors = (page) => {
  return axios.get(`${ENDPOINT}`, {
    params: {
      page: page || 1,
      per_page: 9
    },
  });
};
