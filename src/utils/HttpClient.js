import axios from "axios";
import join from "url-join";
import {
  server,
  apiUrl,
  NOT_CONNECT_NETWORK,
  NETWORK_CONNECTION_MESSAGE,
  TOKEN_KEY,
  NOT_AUTHORIZED,
  AUTHORIZED_MESSAGE,
} from "../Constants";

const isAbsoluteURLRegex = /^(?:\w+:)\/\//;
axios.interceptors.request.use(async (config) => {
  if (!isAbsoluteURLRegex.test(config.url)) {
    config.url = join(apiUrl, config.url);
  }
  const userToken = localStorage.getItem(TOKEN_KEY);
  if (userToken) {
    config.headers = {
      "x-access-token": userToken,
      Authorization: "Bearer " + userToken,
    };
  }

  config.timeout = 10000; // 10 Second
  return config;
});
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (axios.isCancel(error)) {
      return Promise.reject(error);
    } else if (!error.response) {
      return Promise.reject({
        code: NOT_CONNECT_NETWORK,
        message: NETWORK_CONNECTION_MESSAGE,
      });
    }
    console.log(error);
    return Promise.reject({
      code: NOT_AUTHORIZED,
      message: AUTHORIZED_MESSAGE,
    });
  }
);

export const httpClient = axios;
