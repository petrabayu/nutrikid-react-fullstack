export const setLastVisitedPath = (path) => {
  sessionStorage.setItem("lastVisitedPath", path);
};

export const getLastVisitedPath = () => {
  return sessionStorage.getItem("lastVisitedPath") || "/";
};
