import { asyncFetch } from "../apis";

export const signup = (user) => {
  return (dispatch) => {
    asyncFetch(
      "<URL>",
      { METHOD: "<METHOD>", BODY: user },
      (error, response) => {
        if (!error) {
          return dispatch({
            type: "<ACTION-CONST>",
            payload: response,
          });
        }
      }
    );
  };
};

export const signin = (user) => {
  return (dispatch) => {
    asyncFetch(
      "<URL>",
      { METHOD: "<METHOD>", BODY: user },
      (error, response) => {
        if (!error) {
          localStorage.setItem("access-token", response.token);
          return dispatch({
            type: "<ACTION-CONST>",
            payload: response,
          });
        }
      }
    );
  };
};

export const isAuth = () => {
  let token = localStorage.getItem("access-token");
  return !!token ? token : false;
};
