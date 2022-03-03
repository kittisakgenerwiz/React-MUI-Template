export const LOGIN_FETCHING = "LOGIN_FETCHING";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

// Stock Page
export const STOCK_FETCHING = "STOCK_FETCHING";
export const STOCK_SUCCESS = "STOCK_SUCCESS";
export const STOCK_FAILED = "STOCK_FAILED";
export const STOCK_CLEAR = "STOCK_CLEAR";

export const apiUrl = "https://localhost:44387"; //.Net
export const imageUrl = "https://localhost:44387"; //.Net

/* export const YES = "YES";
export const NO = "NO";
export const OK = "ok";
export const NOK = "nok"; */

export const TOKEN_KEY = "TOKEN_KEY";
export const USER_INFO = "USER_INFO";

export const server = {
  LOGIN_URL: `Authen/login`,
  REGISTER_URL: `Account/Register`,
  PRODUCT_URL: `Products/GetAllProducts`,
  TRANSACTION_URL: `transaction`,
  REPORT_URL: `stock/report`,
  LOGIN_PASSED: `yes`,
};

export const NOT_CONNECT_NETWORK = "NOT_CONNECT_NETWORK";
export const NOT_AUTHORIZED = "NOT_AUTHORIZED";
export const NETWORK_CONNECTION_MESSAGE =
  "Cannot connect to server, Please try again.";
export const AUTHORIZED_MESSAGE =
  "You are not authorized to access this application.";
