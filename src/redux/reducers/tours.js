const initialState = {
  items: [],
};

const tours = (state = initialState, action) => {
  if (action.type === "SET_SNEAKERS") {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default tours;
