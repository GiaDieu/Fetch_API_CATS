const cat = (state = {}, action) => {
  switch (action.type) {
    case "FETCHED_CAT":
      return { ...state, loading: true };

    case "REQUESTED_CAT":
      return {
        ...state,
        loading: false,
        url: ""
      };

    case "REQUESTED_CAT_SUCCEEDED":
      return {
        url: action.url,
        loading: false,
        error: false,
        id: action.id
      };
    case "REQUESTED_CAT_FAILED":
      return {
        url: "",
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default cat;
