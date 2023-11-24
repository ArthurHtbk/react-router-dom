export const getCurrentPageNumber = (str) => {
  const current = str.split("/");
  return current[current.length - 1];
};

export const getPreviousPageNumber = (str) => {
  const previous = str.split("=");
  return previous[1] - 1;
};

export const getNextPageNumber = (str) => {
  const next = str.split("=");
  return next[1] + 1;
};
