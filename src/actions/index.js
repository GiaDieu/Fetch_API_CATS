export const fetchCat = () => {
  return { type: "FETCHED_CAT" };
};

export const fetchCats = () => {
  return { type: "FETCHED_CATS" };
};

export const requestCat = () => {
  return { type: "REQUESTED_CAT" };
};

export const requestCats = () => {
  return { type: "REQUESTED_CATS" };
};

export const requestCatSuccess = (data, id) => {
  return { type: "REQUESTED_CAT_SUCCEEDED", url: data.url, id };
};

export const requestCatsSuccess = data => {
  return { type: "REQUESTED_CATS_SUCCEEDED", data };
};

export const requestCatError = () => {
  return { type: "REQUESTED_CAT_FAILED" };
};

export const requestCatsError = () => {
  return { type: "REQUESTED_CATS_FAILED" };
};
