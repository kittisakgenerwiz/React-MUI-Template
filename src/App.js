import React, { useState, useEffect } from "react";
import DefaultLayout from "./components/fragments/DefaultLayout";
import { useSelector, useDispatch } from "react-redux";
import * as loginActions from "./actions/login.action";
import SignIn from "./components/pages/SignIn";

export default function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loginActions.reLogin());
  }, [dispatch]);

  const loginReducer = useSelector(({ loginReducer }) => loginReducer);
  return (
    <div>
      {loginReducer.result && !loginReducer.result.code && <DefaultLayout />}
      {!loginReducer.result && <SignIn />}
    </div>
  );
}
