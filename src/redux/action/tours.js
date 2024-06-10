import axios from "axios";

export const fetchTours =
  (sortBy = "") =>
  async (dispatch) => {
    const url = `http://localhost:3002/tours${
      sortBy ? `?_sort=${sortBy}` : ""
    }`;

    axios.get(url).then(({ data }) => {
      dispatch(setTours(data));
    });
  };

export const setTours = (items) => ({
  type: "SET_SNEAKERS",
  payload: items,
});

export const setSortFilter = (sortBy) => ({
  type: "SET_SORT_FILTER",
  payload: sortBy,
});
