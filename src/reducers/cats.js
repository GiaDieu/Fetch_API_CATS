const cats = (state = { list: [] }, action) => {
  switch (action.type) {
    case "FETCHED_CAT":
      return { ...state, loading: true };

    case "FETCHED_CATS":
      return { ...state, loading: true };

    case "REQUESTED_CATS":
      return { ...state, loading: false, url: "" };

    case "REQUESTED_CATS_SUCCEEDED":
      return { ...state, list: action.data };

    case "REQUESTED_CATS_FAILED":
      return {
        url: "",
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default cats;
