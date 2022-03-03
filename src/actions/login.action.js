import {
  LOGIN_FETCHING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  server,
  TOKEN_KEY,
  USER_INFO,
} from "../Constants";
import { httpClient } from "./../utils/HttpClient";

export const setStateToFetching = () => ({
  type: LOGIN_FETCHING,
});

export const setStateToSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const setStateToFailed = (payload) => ({
  type: LOGIN_FAILED,
  payload,
});

export const setStateToLogout = () => ({
  type: LOGOUT,
});

export const login = ({ username, password, history }) => {
  return async (dispatch) => {
    dispatch(setStateToFetching());

    localStorage.setItem("USER_INFO", "ADMIN");
    dispatch(setStateToSuccess(localStorage.getItem("USER_INFO")));

    /* const result = await httpClient
      .post(server.LOGIN_URL, {
        username,
        password,
      })
      .then((response) => {
        debugger;
        localStorage.setItem("TOKEN_KEY", response.data.Token);
        localStorage.setItem("USER_INFO", JSON.stringify(response.data));
        dispatch(setStateToSuccess(response.data));
      })
      .catch((error) => {
        dispatch(setStateToFailed(error));
      }); */
  };
};

export const reLogin = () => {
  return (dispatch) => {
    const USER_INFO = localStorage.getItem("USER_INFO");
    if (USER_INFO) {
      dispatch(setStateToSuccess(USER_INFO));
    }
  };
};

export const isLoggedIn = () => {
  const loginStatus = localStorage.getItem("USER_INFO");
  return loginStatus;
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_INFO);

    dispatch(setStateToLogout());
  };
};

export const setSuccess = (payload) => {
  return (dispatch) => {
    dispatch(setStateToSuccess(payload));
  };
};

export const hasError = (payload) => {
  return (dispatch) => {
    dispatch(setStateToFailed(payload));
  };
};
